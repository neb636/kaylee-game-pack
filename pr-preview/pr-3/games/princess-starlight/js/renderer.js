export class Renderer {
    constructor(ctx) {
        this.ctx = ctx;
        this.time = 0;
    }

    drawBackground(levelData, camera, canvasWidth, canvasHeight) {
        const ctx = this.ctx;
        this.time += 0.016;

        // Sky gradient
        const colors = levelData.bgColors || ['#87CEEB', '#E0F7FA'];
        const gradient = ctx.createLinearGradient(camera.x, 0, camera.x, canvasHeight);
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(1, colors[1]);
        ctx.fillStyle = gradient;
        ctx.fillRect(camera.x, 0, canvasWidth, canvasHeight);

        // Sun
        if (levelData.theme !== 'cave' && levelData.theme !== 'night') {
            const sunX = camera.x + canvasWidth - 100;
            const sunY = 70;
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(sunX, sunY, 35, 0, Math.PI * 2);
            ctx.fill();
            // Sun rays
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 2;
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2 + this.time * 0.5;
                ctx.beginPath();
                ctx.moveTo(sunX + Math.cos(angle) * 40, sunY + Math.sin(angle) * 40);
                ctx.lineTo(sunX + Math.cos(angle) * 55, sunY + Math.sin(angle) * 55);
                ctx.stroke();
            }
        }

        // Clouds (parallax)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        const cloudPositions = [100, 350, 550, 800, 1100, 1400];
        for (const cx of cloudPositions) {
            const parallaxX = cx - camera.x * 0.3;
            this.drawCloud(parallaxX + camera.x, 40 + (cx % 60));
        }
    }

    drawCloud(x, y) {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.arc(x + 20, y - 10, 25, 0, Math.PI * 2);
        ctx.arc(x + 40, y, 20, 0, Math.PI * 2);
        ctx.arc(x + 20, y + 5, 18, 0, Math.PI * 2);
        ctx.fill();
    }

    drawDecorations(decorations, camera, canvasWidth) {
        const ctx = this.ctx;
        for (const dec of decorations) {
            if (dec.x < camera.x - 50 || dec.x > camera.x + canvasWidth + 50) continue;

            if (dec.type === 'flower') {
                // Stem
                ctx.strokeStyle = '#228B22';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(dec.x, dec.y);
                ctx.lineTo(dec.x, dec.y - 15);
                ctx.stroke();
                // Petals
                ctx.fillStyle = dec.color || '#FF69B4';
                ctx.beginPath();
                ctx.arc(dec.x, dec.y - 18, 6, 0, Math.PI * 2);
                ctx.fill();
                // Center
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.arc(dec.x, dec.y - 18, 3, 0, Math.PI * 2);
                ctx.fill();
            } else if (dec.type === 'tree') {
                // Trunk
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(dec.x - 8, dec.y - 40, 16, 40);
                // Leaves
                ctx.fillStyle = dec.color || '#228B22';
                ctx.beginPath();
                ctx.moveTo(dec.x, dec.y - 80);
                ctx.lineTo(dec.x - 30, dec.y - 40);
                ctx.lineTo(dec.x + 30, dec.y - 40);
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(dec.x, dec.y - 95);
                ctx.lineTo(dec.x - 25, dec.y - 60);
                ctx.lineTo(dec.x + 25, dec.y - 60);
                ctx.closePath();
                ctx.fill();
            } else if (dec.type === 'bush') {
                ctx.fillStyle = dec.color || '#32CD32';
                ctx.beginPath();
                ctx.arc(dec.x, dec.y - 10, 15, 0, Math.PI * 2);
                ctx.arc(dec.x + 15, dec.y - 8, 12, 0, Math.PI * 2);
                ctx.arc(dec.x - 12, dec.y - 8, 12, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    drawPlatform(platform) {
        const ctx = this.ctx;
        const p = platform;

        if (p.type === 'ground') {
            // Ground with grass
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(p.x, p.y, p.width, p.height);
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(p.x, p.y, p.width, 8);
            // Grass tufts
            ctx.fillStyle = '#388E3C';
            for (let gx = p.x; gx < p.x + p.width; gx += 20) {
                ctx.beginPath();
                ctx.moveTo(gx, p.y);
                ctx.lineTo(gx + 4, p.y - 6);
                ctx.lineTo(gx + 8, p.y);
                ctx.fill();
            }
        } else if (p.type === 'cloud') {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            const numBumps = Math.floor(p.width / 25);
            for (let i = 0; i < numBumps; i++) {
                ctx.beginPath();
                ctx.arc(p.x + 15 + i * 25, p.y + 5, 18, 0, Math.PI * 2);
                ctx.fill();
            }
        } else if (p.type === 'cave') {
            ctx.fillStyle = '#696969';
            ctx.fillRect(p.x, p.y, p.width, p.height);
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 1;
            for (let bx = p.x; bx < p.x + p.width; bx += 20) {
                ctx.strokeRect(bx, p.y, 20, p.height);
            }
        } else if (p.type === 'bouncy') {
            ctx.fillStyle = '#FF69B4';
            ctx.fillRect(p.x, p.y, p.width, p.height);
            ctx.fillStyle = '#FF1493';
            ctx.fillRect(p.x, p.y, p.width, 4);
            // Springs
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 2;
            for (let sx = p.x + 10; sx < p.x + p.width; sx += 20) {
                ctx.beginPath();
                ctx.moveTo(sx, p.y + p.height);
                ctx.lineTo(sx + 5, p.y + p.height / 2);
                ctx.lineTo(sx + 10, p.y + p.height);
                ctx.stroke();
            }
        } else {
            // Default platform
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(p.x, p.y, p.width, p.height);
            ctx.fillStyle = '#388E3C';
            ctx.fillRect(p.x, p.y, p.width, 4);
            // Grass tufts
            for (let gx = p.x + 5; gx < p.x + p.width; gx += 15) {
                ctx.beginPath();
                ctx.moveTo(gx, p.y);
                ctx.lineTo(gx + 3, p.y - 5);
                ctx.lineTo(gx + 6, p.y);
                ctx.fill();
            }
        }
    }

    drawPrincess(princess) {
        const ctx = this.ctx;
        const p = princess;

        // Blinking when invincible
        if (p.invincible && Math.floor(p.invincibleTimer * 10) % 2 === 0) {
            return;
        }

        ctx.save();
        const centerX = p.x + p.width / 2;
        ctx.translate(centerX, p.y);

        // Dress (trapezoid)
        ctx.fillStyle = '#FF69B4';
        ctx.beginPath();
        ctx.moveTo(-12, 48);
        ctx.lineTo(-16, 48);  // Dress bottom left
        ctx.lineTo(-10, 20);  // Dress top left
        ctx.lineTo(10, 20);   // Dress top right
        ctx.lineTo(16, 48);   // Dress bottom right
        ctx.lineTo(12, 48);
        ctx.closePath();
        ctx.fill();

        // Dress sparkles
        ctx.fillStyle = '#FFD700';
        const sparkleOffset = Math.sin(this.time * 3) * 2;
        ctx.beginPath();
        ctx.arc(-4, 30 + sparkleOffset, 2, 0, Math.PI * 2);
        ctx.arc(5, 35 - sparkleOffset, 2, 0, Math.PI * 2);
        ctx.arc(-2, 40, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.fillStyle = '#FFE4C4';
        ctx.fillRect(-7, 14, 14, 10);

        // Head
        ctx.fillStyle = '#FFE4C4';
        ctx.beginPath();
        ctx.arc(0, 10, 10, 0, Math.PI * 2);
        ctx.fill();

        // Hair
        ctx.fillStyle = '#DAA520';
        ctx.beginPath();
        ctx.arc(0, 6, 10, Math.PI, 0);
        ctx.fill();
        // Hair sides
        ctx.fillRect(-10, 6, 4, 12);
        ctx.fillRect(6, 6, 4, 12);

        // Crown
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(-7, 2);
        ctx.lineTo(-5, -6);
        ctx.lineTo(-2, 0);
        ctx.lineTo(0, -8);
        ctx.lineTo(2, 0);
        ctx.lineTo(5, -6);
        ctx.lineTo(7, 2);
        ctx.closePath();
        ctx.fill();
        // Crown jewel
        ctx.fillStyle = '#FF1493';
        ctx.beginPath();
        ctx.arc(0, -2, 2, 0, Math.PI * 2);
        ctx.fill();

        // Eyes
        ctx.fillStyle = '#4A4A4A';
        const eyeY = 9;
        if (p.state === 'hurt') {
            // X eyes
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = '#4A4A4A';
            ctx.beginPath();
            ctx.moveTo(-5, eyeY - 2);
            ctx.lineTo(-2, eyeY + 2);
            ctx.moveTo(-2, eyeY - 2);
            ctx.lineTo(-5, eyeY + 2);
            ctx.moveTo(2, eyeY - 2);
            ctx.lineTo(5, eyeY + 2);
            ctx.moveTo(5, eyeY - 2);
            ctx.lineTo(2, eyeY + 2);
            ctx.stroke();
        } else {
            // Normal eyes
            ctx.beginPath();
            ctx.arc(-4 * p.facing, eyeY, 2, 0, Math.PI * 2);
            ctx.arc(3 * p.facing, eyeY, 2, 0, Math.PI * 2);
            ctx.fill();
            // Eye sparkle
            ctx.fillStyle = '#FFF';
            ctx.beginPath();
            ctx.arc(-4 * p.facing + 0.5, eyeY - 0.5, 0.8, 0, Math.PI * 2);
            ctx.arc(3 * p.facing + 0.5, eyeY - 0.5, 0.8, 0, Math.PI * 2);
            ctx.fill();
        }

        // Mouth
        ctx.fillStyle = '#FF6B6B';
        if (p.state === 'jump') {
            // Open mouth
            ctx.beginPath();
            ctx.arc(0, 14, 2, 0, Math.PI);
            ctx.fill();
        } else {
            // Smile
            ctx.beginPath();
            ctx.arc(0, 13, 3, 0.1, Math.PI - 0.1, false);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#FF6B6B';
            ctx.stroke();
        }

        // Walking legs animation
        if (p.state === 'walk') {
            const legOffset = Math.sin(p.animFrame * Math.PI / 2) * 4;
            ctx.fillStyle = '#FF69B4';
            ctx.fillRect(-6, 44, 5, 4 + legOffset);
            ctx.fillRect(1, 44, 5, 4 - legOffset);
        }

        ctx.restore();
    }

    drawStar(star) {
        const ctx = this.ctx;
        const x = star.x;
        const y = star.y + Math.sin(this.time * 3 + star.x) * 5; // Bob up and down
        const size = 12;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(this.time * 2);

        // Star shape
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
            const method = i === 0 ? 'moveTo' : 'lineTo';
            ctx[method](Math.cos(angle) * size, Math.sin(angle) * size);
        }
        ctx.closePath();
        ctx.fill();

        // Glow
        ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
        ctx.beginPath();
        ctx.arc(0, 0, size + 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    drawCrystal(crystal) {
        const ctx = this.ctx;
        const x = crystal.x;
        const y = crystal.y + Math.sin(this.time * 2) * 8;
        const size = 20;

        ctx.save();
        ctx.translate(x, y);

        // Glow
        const glowSize = size + 15 + Math.sin(this.time * 4) * 5;
        const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, glowSize);
        glow.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
        glow.addColorStop(0.5, `rgba(${crystal.glowColor || '155, 89, 182'}, 0.3)`);
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(-glowSize, -glowSize, glowSize * 2, glowSize * 2);

        // Crystal shape (hexagon)
        const hue = (this.time * 60) % 360;
        ctx.fillStyle = `hsl(${hue}, 80%, 60%)`;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
            const method = i === 0 ? 'moveTo' : 'lineTo';
            ctx[method](Math.cos(angle) * size, Math.sin(angle) * size);
        }
        ctx.closePath();
        ctx.fill();

        // Inner shine
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
            const method = i === 0 ? 'moveTo' : 'lineTo';
            ctx[method](Math.cos(angle) * size * 0.5, Math.sin(angle) * size * 0.5);
        }
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    drawRobot(enemy) {
        const ctx = this.ctx;
        const x = enemy.x;
        const y = enemy.y;
        const w = enemy.width;
        const h = enemy.height;

        ctx.save();

        // Body
        ctx.fillStyle = enemy.friendly ? '#90EE90' : '#C0C0C0';
        this.roundRect(x + 2, y + 12, w - 4, h - 16, 4);

        // Head
        ctx.fillStyle = enemy.friendly ? '#98FB98' : '#D3D3D3';
        this.roundRect(x + 4, y + 2, w - 8, 14, 3);

        // Antenna
        ctx.strokeStyle = enemy.friendly ? '#32CD32' : '#888';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + w / 2, y + 2);
        ctx.lineTo(x + w / 2, y - 6);
        ctx.stroke();
        ctx.fillStyle = enemy.friendly ? '#FFD700' : '#FF0000';
        ctx.beginPath();
        ctx.arc(x + w / 2, y - 8, 3, 0, Math.PI * 2);
        ctx.fill();

        // Eyes
        const eyeColor = enemy.friendly ? '#32CD32' : '#FF0000';
        ctx.fillStyle = eyeColor;
        ctx.beginPath();
        ctx.arc(x + w / 2 - 5, y + 8, 3, 0, Math.PI * 2);
        ctx.arc(x + w / 2 + 5, y + 8, 3, 0, Math.PI * 2);
        ctx.fill();

        // Mouth
        if (enemy.friendly) {
            // Smile
            ctx.strokeStyle = '#32CD32';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(x + w / 2, y + 13, 4, 0, Math.PI);
            ctx.stroke();
        } else {
            // Neutral line
            ctx.strokeStyle = '#888';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x + w / 2 - 4, y + 14);
            ctx.lineTo(x + w / 2 + 4, y + 14);
            ctx.stroke();
        }

        // Legs (walking animation)
        ctx.fillStyle = enemy.friendly ? '#228B22' : '#888';
        const legAnim = Math.sin(this.time * 4 + enemy.x) * 3;
        ctx.fillRect(x + 5, y + h - 4, 6, 4 + legAnim);
        ctx.fillRect(x + w - 11, y + h - 4, 6, 4 - legAnim);

        ctx.restore();
    }

    drawUnicorn(unicorn) {
        const ctx = this.ctx;
        const x = unicorn.x;
        const y = unicorn.y;

        ctx.save();

        // Body
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.ellipse(x + 25, y + 25, 25, 15, 0, 0, Math.PI * 2);
        ctx.fill();

        // Head
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(x + 50 * unicorn.facing, y + 10, 12, 0, Math.PI * 2);
        ctx.fill();

        // Horn
        ctx.fillStyle = '#FFD700';
        const hornX = x + 50 * unicorn.facing;
        ctx.beginPath();
        ctx.moveTo(hornX - 3, y + 2);
        ctx.lineTo(hornX, y - 12);
        ctx.lineTo(hornX + 3, y + 2);
        ctx.closePath();
        ctx.fill();

        // Rainbow mane
        const maneColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'];
        for (let i = 0; i < maneColors.length; i++) {
            ctx.fillStyle = maneColors[i];
            ctx.beginPath();
            ctx.arc(x + 25 - i * 4, y + 5, 4, 0, Math.PI * 2);
            ctx.fill();
        }

        // Eye
        ctx.fillStyle = '#4A4A4A';
        ctx.beginPath();
        ctx.arc(x + 48 * unicorn.facing, y + 9, 2, 0, Math.PI * 2);
        ctx.fill();

        // Legs
        ctx.fillStyle = '#FFFFFF';
        const legAnim = Math.sin(this.time * 5) * 4;
        ctx.fillRect(x + 10, y + 35, 5, 12 + legAnim);
        ctx.fillRect(x + 20, y + 35, 5, 12 - legAnim);
        ctx.fillRect(x + 30, y + 35, 5, 12 + legAnim);
        ctx.fillRect(x + 40, y + 35, 5, 12 - legAnim);

        // Hooves
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(x + 10, y + 45 + legAnim, 5, 3);
        ctx.fillRect(x + 20, y + 45 - legAnim, 5, 3);
        ctx.fillRect(x + 30, y + 45 + legAnim, 5, 3);
        ctx.fillRect(x + 40, y + 45 - legAnim, 5, 3);

        // Tail
        ctx.strokeStyle = '#FF69B4';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, y + 20);
        ctx.quadraticCurveTo(x - 15, y + 10 + Math.sin(this.time * 3) * 5, x - 10, y + 30);
        ctx.stroke();

        ctx.restore();
    }

    drawNPC(npc) {
        const ctx = this.ctx;
        // Draw like a friendly robot but with a speech bubble indicator
        const fakeEnemy = { ...npc, friendly: true, active: true };
        this.drawRobot(fakeEnemy);

        if (npc.showBubble) {
            // Speech bubble
            ctx.fillStyle = '#FFF';
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            const bx = npc.x + npc.width / 2;
            const by = npc.y - 20;
            this.roundRect(bx - 30, by - 15, 60, 20, 8);
            ctx.stroke();
            ctx.fillStyle = '#333';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(npc.message || 'Hi!', bx, by);
        }

        // Interaction hint
        if (npc.canInteract && !npc.interacted) {
            ctx.fillStyle = 'rgba(255, 215, 0, 0.8)';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Press SPACE', npc.x + npc.width / 2, npc.y - 30);
        }
    }

    roundRect(x, y, w, h, r) {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
        ctx.fill();
    }
}
