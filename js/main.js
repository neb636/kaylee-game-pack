import { Input } from './input.js';
import { Camera } from './camera.js';
import { Physics } from './physics.js';
import { Renderer } from './renderer.js';
import { Particles } from './particles.js';
import { UI } from './ui.js';
import { Audio } from './audio.js';
import { Princess } from './entities/princess.js';
import { loadLevel } from './levels/level-loader.js';

// Game states
const STATE = {
    MENU: 'menu',
    LEVEL_INTRO: 'level_intro',
    PLAYING: 'playing',
    LEVEL_COMPLETE: 'level_complete',
    GAME_COMPLETE: 'game_complete',
    PAUSED: 'paused',
};

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const TOTAL_LEVELS = 10;

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;
        this.ctx = this.canvas.getContext('2d');

        this.input = new Input();
        this.camera = new Camera(CANVAS_WIDTH, CANVAS_HEIGHT);
        this.physics = new Physics();
        this.renderer = new Renderer(this.ctx);
        this.particles = new Particles();
        this.ui = new UI(this.ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.audio = new Audio();

        this.state = STATE.MENU;
        this.currentLevel = this.loadProgress();
        this.levelData = null;
        this.princess = null;
        this.platforms = [];
        this.stars = [];
        this.enemies = [];
        this.crystal = null;
        this.npcs = [];
        this.unicorn = null;
        this.decorations = [];
        this.starsCollected = 0;
        this.totalStars = 0;

        this.introTimer = 0;
        this.completeTimer = 0;
        this.levelTransitionAlpha = 0;
        this.transitioning = false;

        this.lastTime = 0;
        this.gameLoop = this.gameLoop.bind(this);

        // Start the game
        requestAnimationFrame(this.gameLoop);
    }

    loadProgress() {
        const saved = localStorage.getItem('princessGame_level');
        return saved ? Math.min(parseInt(saved, 10), TOTAL_LEVELS) : 1;
    }

    saveProgress() {
        localStorage.setItem('princessGame_level', this.currentLevel);
    }

    startLevel(levelNum) {
        this.currentLevel = levelNum;
        const level = loadLevel(levelNum);
        this.levelData = level;

        this.princess = new Princess(level.playerStart.x, level.playerStart.y);
        this.platforms = level.platforms;
        this.stars = level.stars;
        this.enemies = level.enemies;
        this.crystal = level.crystal;
        this.npcs = level.npcs || [];
        this.unicorn = level.unicorn || null;
        this.decorations = level.decorations || [];
        this.starsCollected = 0;
        this.totalStars = this.stars.length;

        this.camera.setBounds(level.width, 600);
        this.particles.clear();

        this.state = STATE.LEVEL_INTRO;
        this.introTimer = 3;
    }

    restartLevel() {
        this.startLevel(this.currentLevel);
    }

    update(dt) {
        this.input.update();

        switch (this.state) {
            case STATE.MENU:
                this.updateMenu(dt);
                break;
            case STATE.LEVEL_INTRO:
                this.updateLevelIntro(dt);
                break;
            case STATE.PLAYING:
                this.updatePlaying(dt);
                break;
            case STATE.LEVEL_COMPLETE:
                this.updateLevelComplete(dt);
                break;
            case STATE.GAME_COMPLETE:
                this.updateGameComplete(dt);
                break;
        }

        this.particles.update(dt);
    }

    updateMenu(dt) {
        if (this.input.isAnyKeyPressed()) {
            this.audio.init();
            this.startLevel(this.currentLevel);
        }
    }

    updateLevelIntro(dt) {
        this.introTimer -= dt;
        if (this.introTimer <= 0 || this.input.isAnyKeyPressed()) {
            this.state = STATE.PLAYING;
        }
    }

    updatePlaying(dt) {
        // Update princess
        const wasOnGround = this.princess.onGround;
        this.princess.update(dt, this.input);
        // Play jump sound
        if (wasOnGround && !this.princess.onGround && this.princess.vy < 0) {
            this.audio.play('jump');
        }

        // Physics
        this.physics.applyGravity(this.princess, dt);
        this.physics.resolvePlatformCollisions(this.princess, this.platforms, dt);

        // Check if princess fell off the world
        if (this.princess.y > 700) {
            this.princess.takeDamage();
            if (this.princess.health <= 0) {
                this.restartLevel();
                return;
            } else {
                // Reset to start position
                this.princess.x = this.levelData.playerStart.x;
                this.princess.y = this.levelData.playerStart.y;
                this.princess.vy = 0;
            }
        }

        // Update enemies
        for (const enemy of this.enemies) {
            if (!enemy.active) continue;
            enemy.update(dt);

            if (enemy.friendly) continue;

            // Check player-enemy collision
            const collision = this.physics.checkEntityCollision(this.princess, enemy);
            if (collision) {
                if (collision === 'stomp') {
                    enemy.befriend();
                    this.princess.vy = -250; // Bounce off
                    this.audio.play('stomp');
                    this.particles.burstHearts(enemy.x + enemy.width / 2, enemy.y);
                } else if (!this.princess.invincible) {
                    this.princess.takeDamage();
                    this.audio.play('hurt');
                    if (this.princess.health <= 0) {
                        this.restartLevel();
                        return;
                    }
                }
            }
        }

        // Collect stars
        for (const star of this.stars) {
            if (star.collected) continue;
            if (this.physics.checkCollection(this.princess, star)) {
                star.collect();
                this.starsCollected++;
                this.audio.play('star');
                this.particles.burstSparkles(star.x, star.y);
            }
        }

        // Check crystal
        if (this.crystal && !this.crystal.collected) {
            if (this.physics.checkCollection(this.princess, this.crystal)) {
                this.crystal.collect();
                this.audio.play('victory');
                this.particles.burstConfetti(this.crystal.x, this.crystal.y);
                this.state = STATE.LEVEL_COMPLETE;
                this.completeTimer = 0;
                this.saveProgress();
            }
        }

        // Update NPCs
        for (const npc of this.npcs) {
            npc.update(dt);
            if (this.input.isInteractPressed() && this.physics.checkNearby(this.princess, npc, 60)) {
                npc.interact();
                this.audio.play('interact');
            }
        }

        // Update unicorn
        if (this.unicorn) {
            this.unicorn.update(dt, this.princess, this.input);
        }

        // Update camera
        this.camera.follow(this.princess.x + this.princess.width / 2, this.princess.y);

        // Update star and crystal animations
        for (const star of this.stars) star.update(dt);
        if (this.crystal) this.crystal.update(dt);

        // Update platforms (moving ones)
        for (const platform of this.platforms) {
            platform.update(dt);
        }
    }

    updateLevelComplete(dt) {
        this.completeTimer += dt;
        if (this.completeTimer > 1.5 && this.input.isAnyKeyPressed()) {
            if (this.currentLevel >= TOTAL_LEVELS) {
                this.state = STATE.GAME_COMPLETE;
            } else {
                this.currentLevel++;
                this.saveProgress();
                this.startLevel(this.currentLevel);
            }
        }
    }

    updateGameComplete(dt) {
        // Confetti keeps going
        if (Math.random() < 0.3) {
            this.particles.burstConfetti(
                Math.random() * CANVAS_WIDTH,
                Math.random() * CANVAS_HEIGHT * 0.5
            );
        }
        if (this.input.isAnyKeyPressed()) {
            this.state = STATE.MENU;
            this.currentLevel = 1;
        }
    }

    render() {
        this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        switch (this.state) {
            case STATE.MENU:
                this.ui.drawMenu();
                break;
            case STATE.LEVEL_INTRO:
                this.renderLevel();
                this.ui.drawLevelIntro(this.levelData, this.introTimer);
                break;
            case STATE.PLAYING:
                this.renderLevel();
                this.ui.drawHUD(this.princess.health, this.starsCollected, this.totalStars);
                break;
            case STATE.LEVEL_COMPLETE:
                this.renderLevel();
                this.ui.drawLevelComplete(
                    this.levelData,
                    this.starsCollected,
                    this.totalStars,
                    this.completeTimer
                );
                break;
            case STATE.GAME_COMPLETE:
                this.ui.drawGameComplete();
                this.particles.render(this.ctx, 0, 0);
                break;
        }
    }

    renderLevel() {
        this.ctx.save();
        this.ctx.translate(-this.camera.x, -this.camera.y);

        // Background
        this.renderer.drawBackground(this.levelData, this.camera, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Decorations (behind everything)
        this.renderer.drawDecorations(this.decorations, this.camera, CANVAS_WIDTH);

        // Platforms
        for (const platform of this.platforms) {
            this.renderer.drawPlatform(platform);
        }

        // Stars
        for (const star of this.stars) {
            if (!star.collected) this.renderer.drawStar(star);
        }

        // Crystal
        if (this.crystal && !this.crystal.collected) {
            this.renderer.drawCrystal(this.crystal);
        }

        // NPCs
        for (const npc of this.npcs) {
            this.renderer.drawNPC(npc);
        }

        // Enemies
        for (const enemy of this.enemies) {
            if (enemy.active) this.renderer.drawRobot(enemy);
        }

        // Unicorn
        if (this.unicorn) {
            this.renderer.drawUnicorn(this.unicorn);
        }

        // Princess
        this.renderer.drawPrincess(this.princess);

        // Particles (in world space)
        this.particles.render(this.ctx, 0, 0);

        this.ctx.restore();
    }

    gameLoop(timestamp) {
        const dt = Math.min((timestamp - this.lastTime) / 1000, 0.05); // Cap dt
        this.lastTime = timestamp;

        this.update(dt);
        this.render();

        requestAnimationFrame(this.gameLoop);
    }
}

// Start the game
const game = new Game();
