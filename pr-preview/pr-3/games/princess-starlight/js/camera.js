export class Camera {
    constructor(viewWidth, viewHeight) {
        this.x = 0;
        this.y = 0;
        this.viewWidth = viewWidth;
        this.viewHeight = viewHeight;
        this.worldWidth = viewWidth;
        this.worldHeight = viewHeight;
        this.smoothing = 0.1;
    }

    setBounds(worldWidth, worldHeight) {
        this.worldWidth = worldWidth;
        this.worldHeight = worldHeight;
    }

    follow(targetX, targetY) {
        const desiredX = targetX - this.viewWidth / 2;
        const desiredY = targetY - this.viewHeight / 2;

        // Smooth follow
        this.x += (desiredX - this.x) * this.smoothing;
        this.y += (desiredY - this.y) * this.smoothing;

        // Clamp to world bounds
        this.x = Math.max(0, Math.min(this.x, this.worldWidth - this.viewWidth));
        this.y = Math.max(0, Math.min(this.y, this.worldHeight - this.viewHeight));
    }
}
