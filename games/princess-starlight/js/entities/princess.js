export class Princess {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 48;
        this.vx = 0;
        this.vy = 0;

        this.speed = 200;
        this.jumpVelocity = -380;
        this.onGround = false;
        this.facing = 1; // 1 = right, -1 = left

        this.health = 3;
        this.maxHealth = 3;
        this.invincible = false;
        this.invincibleTimer = 0;
        this.invincibleDuration = 2;

        // Coyote time and jump buffering
        this.coyoteTime = 0.15;
        this.coyoteTimer = 0;
        this.jumpBuffer = 0.1;
        this.jumpBufferTimer = 0;

        // Animation
        this.animTimer = 0;
        this.animFrame = 0;
        this.state = 'idle'; // idle, walk, jump, hurt

        // Riding unicorn
        this.ridingUnicorn = false;
    }

    update(dt, input) {
        // Horizontal movement
        this.vx = 0;
        if (input.isLeft()) {
            this.vx = -this.speed;
            this.facing = -1;
        }
        if (input.isRight()) {
            this.vx = this.speed;
            this.facing = 1;
        }

        // Coyote time
        if (this.onGround) {
            this.coyoteTimer = this.coyoteTime;
        } else {
            this.coyoteTimer -= dt;
        }

        // Jump buffering
        if (input.isJump()) {
            this.jumpBufferTimer = this.jumpBuffer;
        } else {
            this.jumpBufferTimer -= dt;
        }

        // Jump
        if (this.jumpBufferTimer > 0 && this.coyoteTimer > 0) {
            this.vy = this.jumpVelocity;
            this.onGround = false;
            this.coyoteTimer = 0;
            this.jumpBufferTimer = 0;
        }

        // Variable jump height - release early for shorter jump
        if (!input.isJump() && this.vy < 0) {
            this.vy *= 0.9;
        }

        // Apply horizontal movement
        this.x += this.vx * dt;

        // Prevent going left of world
        if (this.x < 0) this.x = 0;

        // Invincibility
        if (this.invincible) {
            this.invincibleTimer -= dt;
            if (this.invincibleTimer <= 0) {
                this.invincible = false;
            }
        }

        // Animation state
        if (this.invincible && this.state === 'hurt') {
            // Stay in hurt briefly
        } else if (!this.onGround) {
            this.state = 'jump';
        } else if (Math.abs(this.vx) > 0) {
            this.state = 'walk';
        } else {
            this.state = 'idle';
        }

        // Walk animation
        this.animTimer += dt;
        if (this.animTimer > 0.15) {
            this.animTimer = 0;
            this.animFrame = (this.animFrame + 1) % 4;
        }
    }

    takeDamage() {
        if (this.invincible) return;
        this.health--;
        this.invincible = true;
        this.invincibleTimer = this.invincibleDuration;
        this.state = 'hurt';
        // Knockback
        this.vy = -200;
        this.vx = -this.facing * 100;
    }
}
