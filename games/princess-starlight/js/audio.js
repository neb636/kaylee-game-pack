export class Audio {
    constructor() {
        this.ctx = null;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
        } catch (e) {
            console.log('Audio not available');
        }
    }

    play(type) {
        if (!this.initialized || !this.ctx) return;

        switch (type) {
            case 'star':
                this.playTone([800, 1000, 1200], 0.08, 'sine', 0.15);
                break;
            case 'stomp':
                this.playTone([300, 500, 700, 900], 0.06, 'square', 0.1);
                break;
            case 'hurt':
                this.playTone([400, 300, 200], 0.1, 'sawtooth', 0.08);
                break;
            case 'victory':
                this.playTone([523, 659, 784, 1047], 0.15, 'sine', 0.2);
                break;
            case 'interact':
                this.playTone([600, 800], 0.08, 'sine', 0.12);
                break;
            case 'jump':
                this.playSlide(300, 600, 0.12, 'sine', 0.08);
                break;
        }
    }

    playTone(frequencies, noteDuration, waveType, volume) {
        const ctx = this.ctx;
        const now = ctx.currentTime;

        frequencies.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = waveType;
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(volume, now + i * noteDuration);
            gain.gain.exponentialRampToValueAtTime(0.001, now + (i + 1) * noteDuration);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * noteDuration);
            osc.stop(now + (i + 1) * noteDuration + 0.05);
        });
    }

    playSlide(startFreq, endFreq, duration, waveType, volume) {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = waveType;
        osc.frequency.setValueAtTime(startFreq, now);
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);
        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + duration + 0.05);
    }
}
