export class Platform {
    constructor(x, y, width, height, type = 'static', options = {}) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
        this.moving = options.moving || false;
        this.vx = 0;
        this.vy = 0;

        // Moving platform settings
        if (this.moving) {
            this.moveAxis = options.moveAxis || 'x'; // 'x' or 'y'
            this.moveMin = options.moveMin || x;
            this.moveMax = options.moveMax || x + 100;
            this.moveSpeed = options.moveSpeed || 50;
            this.moveDir = 1;
        }

        // Falling platform
        this.falling = options.falling || false;
        this.fallDelay = options.fallDelay || 0.5;
        this.fallTimer = 0;
        this.triggered = false;
        this.originalY = y;
    }

    update(dt) {
        if (this.moving) {
            if (this.moveAxis === 'x') {
                this.vx = this.moveSpeed * this.moveDir;
                this.x += this.vx * dt;
                if (this.x <= this.moveMin) {
                    this.x = this.moveMin;
                    this.moveDir = 1;
                } else if (this.x >= this.moveMax) {
                    this.x = this.moveMax;
                    this.moveDir = -1;
                }
            } else {
                this.vy = this.moveSpeed * this.moveDir;
                this.y += this.vy * dt;
                if (this.y <= this.moveMin) {
                    this.y = this.moveMin;
                    this.moveDir = 1;
                } else if (this.y >= this.moveMax) {
                    this.y = this.moveMax;
                    this.moveDir = -1;
                }
            }
        }
    }
}
