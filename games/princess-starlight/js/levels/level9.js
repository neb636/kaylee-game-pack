// Level 9: Robot King's Tower
export const level9Data = {
    width: 1600,
    playerStart: { x: 50, y: 520 },
    platforms: [
        // Tower base
        { x: 0, y: 550, w: 300, h: 50, type: 'cave' },
        // Tower climb (zigzag up)
        { x: 200, y: 470, w: 120, h: 20, type: 'cave' },
        { x: 50, y: 400, w: 130, h: 20, type: 'cave' },
        { x: 250, y: 340, w: 100, h: 20, type: 'cave' },
        // Elevator platform
        { x: 400, y: 450, w: 80, h: 20, type: 'cave', moving: true, moveAxis: 'y', moveMin: 200, moveMax: 450, moveSpeed: 50 },
        // Mid tower
        { x: 500, y: 350, w: 150, h: 20, type: 'cave' },
        { x: 700, y: 280, w: 100, h: 20, type: 'cave' },
        { x: 500, y: 200, w: 120, h: 20, type: 'cave' },
        // Another elevator
        { x: 750, y: 350, w: 80, h: 20, type: 'cave', moving: true, moveAxis: 'y', moveMin: 150, moveMax: 350, moveSpeed: 45 },
        // Upper tower
        { x: 850, y: 250, w: 130, h: 20, type: 'cave' },
        { x: 1000, y: 180, w: 100, h: 20, type: 'cave' },
        { x: 850, y: 120, w: 120, h: 20, type: 'cave' },
        { x: 1050, y: 100, w: 100, h: 20, type: 'cave', moving: true, moveAxis: 'x', moveMin: 1020, moveMax: 1150, moveSpeed: 40 },
        // Tower top
        { x: 1200, y: 150, w: 200, h: 20, type: 'cave' },
        // Descent
        { x: 1250, y: 300, w: 120, h: 20, type: 'cave' },
        { x: 1350, y: 420, w: 150, h: 20, type: 'cave' },
        // End ground
        { x: 1300, y: 550, w: 300, h: 50, type: 'cave' },
    ],
    stars: [
        { x: 260, y: 430 },
        { x: 115, y: 360 },
        { x: 300, y: 300 },
        { x: 440, y: 250 },
        { x: 575, y: 310 },
        { x: 750, y: 240 },
        { x: 560, y: 160 },
        { x: 790, y: 200 },
        { x: 915, y: 210 },
        { x: 1050, y: 140 },
        { x: 910, y: 80 },
        { x: 1100, y: 60 },
        { x: 1300, y: 110 },
        { x: 1310, y: 260 },
        { x: 1425, y: 380 },
    ],
    enemies: [
        { x: 500, y: 314, patrolMin: 500, patrolMax: 620, speed: 45 },
        { x: 850, y: 214, patrolMin: 850, patrolMax: 960, speed: 50 },
        { x: 1000, y: 144, patrolMin: 1000, patrolMax: 1080, speed: 45 },
        { x: 1200, y: 114, patrolMin: 1200, patrolMax: 1380, speed: 50 },
        { x: 1350, y: 384, patrolMin: 1350, patrolMax: 1470, speed: 45 },
    ],
    crystal: { x: 1500, y: 500 },
    decorations: [],
};
