export class Particles {
    constructor() {
        this.particles = [];
    }

    clear() {
        this.particles = [];
    }

    update(dt) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.vy += (p.gravity || 0) * dt;
            p.life -= dt;
            p.alpha = Math.max(0, p.life / p.maxLife);

            if (p.life <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    render(ctx, offsetX, offsetY) {
        for (const p of this.particles) {
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.translate(p.x - offsetX, p.y - offsetY);

            if (p.rotation) {
                ctx.rotate(p.rotation + p.life * p.rotSpeed);
            }

            if (p.shape === 'star') {
                this.drawMiniStar(ctx, p.size, p.color);
            } else if (p.shape === 'heart') {
                this.drawMiniHeart(ctx, p.size, p.color);
            } else if (p.shape === 'confetti') {
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            } else {
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(0, 0, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        }
    }

    drawMiniStar(ctx, size, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
            const method = i === 0 ? 'moveTo' : 'lineTo';
            ctx[method](Math.cos(angle) * size, Math.sin(angle) * size);
        }
        ctx.closePath();
        ctx.fill();
    }

    drawMiniHeart(ctx, size, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, size * 0.3);
        ctx.bezierCurveTo(-size, -size * 0.5, -size * 0.5, -size, 0, -size * 0.3);
        ctx.bezierCurveTo(size * 0.5, -size, size, -size * 0.5, 0, size * 0.3);
        ctx.fill();
    }

    burstSparkles(x, y) {
        const colors = ['#FFD700', '#FFF', '#FF69B4', '#FFE4B5'];
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const speed = 80 + Math.random() * 80;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                gravity: 100,
                life: 0.6 + Math.random() * 0.4,
                maxLife: 1,
                size: 3 + Math.random() * 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                shape: 'star',
                alpha: 1,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: 3 + Math.random() * 3,
            });
        }
    }

    burstHearts(x, y) {
        const colors = ['#FF69B4', '#FF1493', '#FFB6C1'];
        for (let i = 0; i < 8; i++) {
            const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI;
            const speed = 60 + Math.random() * 60;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 50,
                gravity: 80,
                life: 0.8 + Math.random() * 0.5,
                maxLife: 1.3,
                size: 6 + Math.random() * 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                shape: 'heart',
                alpha: 1,
                rotation: 0,
                rotSpeed: 0,
            });
        }
    }

    burstConfetti(x, y) {
        const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF', '#FF69B4', '#FFD700'];
        for (let i = 0; i < 15; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 100 + Math.random() * 150;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 80,
                gravity: 200,
                life: 1 + Math.random() * 1,
                maxLife: 2,
                size: 5 + Math.random() * 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                shape: 'confetti',
                alpha: 1,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: 5 + Math.random() * 5,
            });
        }
    }
}
