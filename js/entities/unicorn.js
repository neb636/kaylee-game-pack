export class Unicorn {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 55;
        this.height = 50;
        this.facing = 1;
        this.mounted = false;
        this.mountRange = 50;
    }

    update(dt, princess, input) {
        if (this.mounted) {
            this.x = princess.x - 12;
            this.y = princess.y + 5;
            this.facing = princess.facing;
        } else {
            // Check if princess is near and presses space
            const dx = (princess.x + princess.width / 2) - (this.x + this.width / 2);
            const dy = (princess.y + princess.height / 2) - (this.y + this.height / 2);
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.mountRange && input.isInteractPressed()) {
                this.mount(princess);
            }
        }
    }

    mount(princess) {
        this.mounted = true;
        princess.ridingUnicorn = true;
        princess.speed = 280; // Faster on unicorn
        princess.jumpVelocity = -450; // Higher jump on unicorn
    }
}
