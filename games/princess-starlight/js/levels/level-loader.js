import { LEVEL_COLORS, LEVEL_NAMES, THEMES } from './level-data.js';
import { Platform } from '../entities/platform.js';
import { Star } from '../entities/star.js';
import { Robot } from '../entities/robot.js';
import { Crystal } from '../entities/crystal.js';
import { Unicorn } from '../entities/unicorn.js';
import { NPC } from '../entities/npc.js';

import { level1Data } from './level1.js';
import { level2Data } from './level2.js';
import { level3Data } from './level3.js';
import { level4Data } from './level4.js';
import { level5Data } from './level5.js';
import { level6Data } from './level6.js';
import { level7Data } from './level7.js';
import { level8Data } from './level8.js';
import { level9Data } from './level9.js';
import { level10Data } from './level10.js';

const LEVEL_DATA = [
    level1Data, level2Data, level3Data, level4Data, level5Data,
    level6Data, level7Data, level8Data, level9Data, level10Data,
];

const THEME_KEYS = [
    'garden', 'meadow', 'bridge', 'cave', 'cloud',
    'village', 'waterfall', 'forest', 'tower', 'finale',
];

export function loadLevel(levelNum) {
    const idx = levelNum - 1;
    const data = LEVEL_DATA[idx];
    const colorInfo = LEVEL_COLORS[idx];
    const themeInfo = THEMES[THEME_KEYS[idx]];

    const platforms = data.platforms.map(p =>
        new Platform(p.x, p.y, p.w, p.h, p.type, {
            moving: p.moving,
            moveAxis: p.moveAxis,
            moveMin: p.moveMin,
            moveMax: p.moveMax,
            moveSpeed: p.moveSpeed,
        })
    );

    const stars = data.stars.map(s => new Star(s.x, s.y));

    const enemies = data.enemies.map(e =>
        new Robot(e.x, e.y, e.patrolMin, e.patrolMax, e.speed)
    );

    const crystal = new Crystal(data.crystal.x, data.crystal.y, colorInfo.color);
    crystal.glowColor = colorInfo.glow;

    let unicorn = null;
    if (data.unicorn) {
        unicorn = new Unicorn(data.unicorn.x, data.unicorn.y);
    }

    const npcs = (data.npcs || []).map(n =>
        new NPC(n.x, n.y, n.message, { opensGate: n.opensGate })
    );

    return {
        levelNum,
        name: LEVEL_NAMES[idx],
        color: colorInfo.color,
        colorName: colorInfo.name,
        width: data.width,
        playerStart: data.playerStart,
        platforms,
        stars,
        enemies,
        crystal,
        unicorn,
        npcs,
        decorations: data.decorations || [],
        bgColors: themeInfo.bgColors,
        theme: themeInfo.theme,
    };
}
