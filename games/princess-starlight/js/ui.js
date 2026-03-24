export class UI {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.menuTime = 0;
    }

    drawMenu() {
        const ctx = this.ctx;
        this.menuTime += 0.016;

        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, this.height);
        gradient.addColorStop(0, '#1a0a2e');
        gradient.addColorStop(0.5, '#4a1a6b');
        gradient.addColorStop(1, '#FF69B4');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.width, this.height);

        // Floating stars in background
        ctx.fillStyle = '#FFD700';
        for (let i = 0; i < 20; i++) {
            const sx = (i * 137.5 + this.menuTime * 20) % this.width;
            const sy = (i * 73.3 + Math.sin(this.menuTime + i) * 20) % this.height;
            const size = 2 + Math.sin(this.menuTime * 2 + i) * 1;
            ctx.beginPath();
            ctx.arc(sx, sy, size, 0, Math.PI * 2);
            ctx.fill();
        }

        // Title
        const bounce = Math.sin(this.menuTime * 2) * 8;
        ctx.textAlign = 'center';

        // Title shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.font = 'bold 38px Arial';
        ctx.fillText('Princess Starlight', this.width / 2 + 2, 152 + bounce);

        // Title main
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 38px Arial';
        ctx.fillText('Princess Starlight', this.width / 2, 150 + bounce);

        // Subtitle
        ctx.fillStyle = '#FF69B4';
        ctx.font = 'bold 22px Arial';
        ctx.fillText('and the Rainbow Crystal Quest', this.width / 2, 190 + bounce);

        // Draw a simple princess in the menu
        this.drawMenuPrincess(this.width / 2, 300);

        // Press any key
        const alpha = 0.5 + Math.sin(this.menuTime * 3) * 0.5;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 20px Arial';
        ctx.fillText('Press any key to start!', this.width / 2, 450);
        ctx.globalAlpha = 1;

        // Crown decorations
        ctx.fillStyle = '#FFD700';
        this.drawCrown(this.width / 2 - 140, 125 + bounce, 0.7);
        this.drawCrown(this.width / 2 + 115, 125 + bounce, 0.7);
    }

    drawMenuPrincess(x, y) {
        const ctx = this.ctx;
        const scale = 2.5;
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);

        // Dress
        ctx.fillStyle = '#FF69B4';
        ctx.beginPath();
        ctx.moveTo(-16, 28);
        ctx.lineTo(-10, 0);
        ctx.lineTo(10, 0);
        ctx.lineTo(16, 28);
        ctx.closePath();
        ctx.fill();

        // Sparkles on dress
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(-4, 10, 1.5, 0, Math.PI * 2);
        ctx.arc(5, 15, 1.5, 0, Math.PI * 2);
        ctx.arc(-2, 20, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.fillStyle = '#FFE4C4';
        ctx.fillRect(-5, -6, 10, 8);

        // Head
        ctx.fillStyle = '#FFE4C4';
        ctx.beginPath();
        ctx.arc(0, -12, 8, 0, Math.PI * 2);
        ctx.fill();

        // Hair
        ctx.fillStyle = '#DAA520';
        ctx.beginPath();
        ctx.arc(0, -15, 8, Math.PI, 0);
        ctx.fill();
        ctx.fillRect(-8, -15, 3, 10);
        ctx.fillRect(5, -15, 3, 10);

        // Crown
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(-6, -18);
        ctx.lineTo(-4, -24);
        ctx.lineTo(-1, -19);
        ctx.lineTo(0, -26);
        ctx.lineTo(1, -19);
        ctx.lineTo(4, -24);
        ctx.lineTo(6, -18);
        ctx.closePath();
        ctx.fill();

        // Crown jewel
        ctx.fillStyle = '#FF1493';
        ctx.beginPath();
        ctx.arc(0, -21, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Eyes
        ctx.fillStyle = '#4A4A4A';
        ctx.beginPath();
        ctx.arc(-3, -12, 1.5, 0, Math.PI * 2);
        ctx.arc(3, -12, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Eye sparkle
        ctx.fillStyle = '#FFF';
        ctx.beginPath();
        ctx.arc(-2.5, -12.5, 0.6, 0, Math.PI * 2);
        ctx.arc(3.5, -12.5, 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Smile
        ctx.strokeStyle = '#FF6B6B';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(0, -10, 2.5, 0.1, Math.PI - 0.1);
        ctx.stroke();

        ctx.restore();
    }

    drawCrown(x, y, scale) {
        const ctx = this.ctx;
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);
        ctx.beginPath();
        ctx.moveTo(-10, 5);
        ctx.lineTo(-7, -8);
        ctx.lineTo(-3, 0);
        ctx.lineTo(0, -12);
        ctx.lineTo(3, 0);
        ctx.lineTo(7, -8);
        ctx.lineTo(10, 5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    drawHUD(health, starsCollected, totalStars) {
        const ctx = this.ctx;

        // Hearts
        for (let i = 0; i < 3; i++) {
            const hx = 20 + i * 35;
            const hy = 25;
            if (i < health) {
                ctx.fillStyle = '#FF1493';
            } else {
                ctx.fillStyle = 'rgba(255, 20, 147, 0.3)';
            }
            this.drawHeart(hx, hy, 12);
        }

        // Star counter
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 22px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(`⭐ ${starsCollected} / ${totalStars}`, this.width - 20, 32);
        ctx.textAlign = 'left';
    }

    drawHeart(x, y, size) {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.moveTo(x, y + size * 0.3);
        ctx.bezierCurveTo(x - size, y - size * 0.5, x - size * 0.5, y - size, x, y - size * 0.3);
        ctx.bezierCurveTo(x + size * 0.5, y - size, x + size, y - size * 0.5, x, y + size * 0.3);
        ctx.fill();
    }

    drawLevelIntro(levelData, timer) {
        const ctx = this.ctx;

        // Semi-transparent overlay
        const alpha = Math.min(1, timer);
        ctx.fillStyle = `rgba(0, 0, 0, ${alpha * 0.6})`;
        ctx.fillRect(0, 0, this.width, this.height);

        ctx.globalAlpha = alpha;
        ctx.textAlign = 'center';

        // Level number
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 28px Arial';
        ctx.fillText(`Level ${levelData.levelNum}`, this.width / 2, this.height / 2 - 60);

        // Level name
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 36px Arial';
        ctx.fillText(levelData.name, this.width / 2, this.height / 2 - 15);

        // Color being restored
        ctx.fillStyle = levelData.color;
        ctx.font = '20px Arial';
        ctx.fillText(`Restore the color: ${levelData.colorName}!`, this.width / 2, this.height / 2 + 25);

        // Controls hint (level 1 only)
        if (levelData.levelNum === 1) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.font = '16px Arial';
            ctx.fillText('Arrow Keys to move and jump', this.width / 2, this.height / 2 + 70);
            ctx.fillText('Collect stars and find the crystal!', this.width / 2, this.height / 2 + 95);
        }

        ctx.globalAlpha = 1;
        ctx.textAlign = 'left';
    }

    drawLevelComplete(levelData, starsCollected, totalStars, timer) {
        const ctx = this.ctx;

        // Overlay
        const alpha = Math.min(1, timer);
        ctx.fillStyle = `rgba(0, 0, 0, ${alpha * 0.5})`;
        ctx.fillRect(0, 0, this.width, this.height);

        ctx.globalAlpha = alpha;
        ctx.textAlign = 'center';

        // Title
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 36px Arial';
        ctx.fillText('Level Complete!', this.width / 2, this.height / 2 - 60);

        // Level name
        ctx.fillStyle = '#FFF';
        ctx.font = '24px Arial';
        ctx.fillText(levelData.name, this.width / 2, this.height / 2 - 20);

        // Stars
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 28px Arial';
        ctx.fillText(`⭐ ${starsCollected} / ${totalStars}`, this.width / 2, this.height / 2 + 25);

        // Color restored
        ctx.fillStyle = levelData.color;
        ctx.font = '22px Arial';
        ctx.fillText(`${levelData.colorName} restored!`, this.width / 2, this.height / 2 + 65);

        // Continue prompt
        if (timer > 1.5) {
            const promptAlpha = 0.5 + Math.sin(timer * 3) * 0.5;
            ctx.globalAlpha = promptAlpha;
            ctx.fillStyle = '#FFF';
            ctx.font = '18px Arial';
            ctx.fillText('Press any key to continue', this.width / 2, this.height / 2 + 110);
        }

        ctx.globalAlpha = 1;
        ctx.textAlign = 'left';
    }

    drawGameComplete() {
        const ctx = this.ctx;
        this.menuTime += 0.016;

        // Rainbow background
        const gradient = ctx.createLinearGradient(0, 0, this.width, this.height);
        const hue = (this.menuTime * 30) % 360;
        gradient.addColorStop(0, `hsl(${hue}, 80%, 70%)`);
        gradient.addColorStop(0.5, `hsl(${(hue + 120) % 360}, 80%, 70%)`);
        gradient.addColorStop(1, `hsl(${(hue + 240) % 360}, 80%, 70%)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.width, this.height);

        ctx.textAlign = 'center';

        const bounce = Math.sin(this.menuTime * 2) * 5;

        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 42px Arial';
        ctx.fillText('You Did It!', this.width / 2, 150 + bounce);

        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 26px Arial';
        ctx.fillText('The Sparkle Kingdom is saved!', this.width / 2, 210);

        ctx.fillStyle = '#FFF';
        ctx.font = '20px Arial';
        ctx.fillText('Princess Starlight and the Robot King', this.width / 2, 280);
        ctx.fillText('are now best friends!', this.width / 2, 310);

        ctx.fillStyle = '#FF69B4';
        ctx.font = '24px Arial';
        ctx.fillText('🌟 🦄 🤖 👑 ❤️', this.width / 2, 380);

        const alpha = 0.5 + Math.sin(this.menuTime * 3) * 0.5;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#FFF';
        ctx.font = '18px Arial';
        ctx.fillText('Press any key to play again', this.width / 2, 480);
        ctx.globalAlpha = 1;

        ctx.textAlign = 'left';
    }
}
