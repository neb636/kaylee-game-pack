export class NPC {
    constructor(x, y, message, options = {}) {
        this.x = x;
        this.y = y;
        this.width = 28;
        this.height = 36;
        this.message = message;
        this.canInteract = true;
        this.interacted = false;
        this.showBubble = false;
        this.bubbleTimer = 0;
        this.friendly = true;
        this.active = true;
        this.opensGate = options.opensGate || null;
        this.gateOpened = false;
    }

    update(dt) {
        if (this.showBubble) {
            this.bubbleTimer -= dt;
            if (this.bubbleTimer <= 0) {
                this.showBubble = false;
            }
        }
    }

    interact() {
        if (this.interacted) return;
        this.interacted = true;
        this.showBubble = true;
        this.bubbleTimer = 2;
        this.canInteract = false;
        this.gateOpened = true;
    }
}
