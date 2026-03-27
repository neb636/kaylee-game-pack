export class Robot {
    constructor(x, y, patrolMin, patrolMax, speed = 30) {
        this.x = x;
        this.y = y;
        this.width = 28;
        this.height = 36;
        this.speed = speed;
        this.patrolMin = patrolMin;
        this.patrolMax = patrolMax;
        this.direction = 1;
        this.active = true;
        this.friendly = false;
        this.friendAnim = 0;
    }

    update(dt) {
        if (this.friendly) {
            this.friendAnim += dt;
            return;
        }

        this.x += this.speed * this.direction * dt;

        if (this.x <= this.patrolMin) {
            this.x = this.patrolMin;
            this.direction = 1;
        } else if (this.x >= this.patrolMax) {
            this.x = this.patrolMax;
            this.direction = -1;
        }
    }

    befriend() {
        this.friendly = true;
        this.speed = 0;
    }
}
