// Level 5: Cloud Kingdom
export const level5Data = {
    width: 1800,
    playerStart: { x: 50, y: 520 },
    platforms: [
        // Starting ground
        { x: 0, y: 550, w: 200, h: 50, type: 'ground' },
        // Cloud platforms (going upward and right)
        { x: 150, y: 470, w: 120, h: 25, type: 'cloud' },
        { x: 350, y: 400, w: 100, h: 25, type: 'cloud' },
        { x: 200, y: 330, w: 110, h: 25, type: 'cloud' },
        { x: 450, y: 300, w: 120, h: 25, type: 'cloud' },
        { x: 600, y: 350, w: 100, h: 25, type: 'cloud', moving: true, moveAxis: 'x', moveMin: 550, moveMax: 700, moveSpeed: 40 },
        { x: 750, y: 280, w: 110, h: 25, type: 'cloud' },
        { x: 500, y: 200, w: 100, h: 25, type: 'cloud' },
        { x: 700, y: 150, w: 120, h: 25, type: 'cloud' },
        // Bouncy cloud!
        { x: 900, y: 400, w: 100, h: 25, type: 'bouncy' },
        // Upper section
        { x: 950, y: 200, w: 130, h: 25, type: 'cloud' },
        { x: 1100, y: 300, w: 100, h: 25, type: 'cloud', moving: true, moveAxis: 'y', moveMin: 250, moveMax: 350, moveSpeed: 30 },
        { x: 1250, y: 250, w: 110, h: 25, type: 'cloud' },
        { x: 1400, y: 320, w: 120, h: 25, type: 'cloud' },
        { x: 1550, y: 250, w: 100, h: 25, type: 'cloud' },
        // Final platform
        { x: 1600, y: 400, w: 200, h: 25, type: 'cloud' },
    ],
    stars: [
        { x: 210, y: 430 },
        { x: 400, y: 360 },
        { x: 260, y: 290 },
        { x: 510, y: 260 },
        { x: 650, y: 310 },
        { x: 810, y: 240 },
        { x: 550, y: 160 },
        { x: 760, y: 110 },
        { x: 1010, y: 160 },
        { x: 1310, y: 210 },
        { x: 1600, y: 210 },
        { x: 1700, y: 360 },
    ],
    enemies: [
        { x: 450, y: 264, patrolMin: 450, patrolMax: 550, speed: 30 },
        { x: 950, y: 164, patrolMin: 950, patrolMax: 1060, speed: 35 },
        { x: 1400, y: 284, patrolMin: 1400, patrolMax: 1500, speed: 35 },
    ],
    crystal: { x: 1700, y: 350 },
    decorations: [],
};
