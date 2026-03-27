export class Crystal {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.collected = false;
        this.color = color || '#9B59B6';
        this.glowColor = '155, 89, 182';
        this.time = 0;
    }

    update(dt) {
        this.time += dt;
    }

    collect() {
        this.collected = true;
    }
}
