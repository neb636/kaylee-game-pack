export class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.collected = false;
        this.collectAnim = 0;
    }

    update(dt) {
        if (this.collected) {
            this.collectAnim += dt;
        }
    }

    collect() {
        this.collected = true;
    }
}
