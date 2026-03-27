export class Input {
    constructor() {
        this.keys = {};
        this.justPressed = {};
        this._justPressedThisFrame = {};

        window.addEventListener('keydown', (e) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
                e.preventDefault();
            }
            if (!this.keys[e.key]) {
                this.justPressed[e.key] = true;
            }
            this.keys[e.key] = true;
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        });
    }

    // Call at the start of each frame to snapshot justPressed state
    update() {
        this._justPressedThisFrame = { ...this.justPressed };
        this.justPressed = {};
    }

    isLeft() {
        return this.keys['ArrowLeft'] || this.keys['a'] || this.keys['A'];
    }

    isRight() {
        return this.keys['ArrowRight'] || this.keys['d'] || this.keys['D'];
    }

    isJump() {
        return this.keys['ArrowUp'] || this.keys['w'] || this.keys['W'];
    }

    isInteractPressed() {
        return this._justPressedThisFrame[' '] || false;
    }

    isAnyKeyPressed() {
        return Object.keys(this._justPressedThisFrame).some(k => this._justPressedThisFrame[k]);
    }
}
