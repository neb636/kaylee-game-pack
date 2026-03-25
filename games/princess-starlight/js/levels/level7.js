// Level 7: Rainbow Waterfall
export const level7Data = {
    width: 1800,
    playerStart: { x: 50, y: 520 },
    platforms: [
        // Bottom
        { x: 0, y: 550, w: 300, h: 50, type: 'ground' },
        // Climbing up alongside waterfall
        { x: 200, y: 470, w: 100, h: 20, type: 'static' },
        { x: 50, y: 400, w: 120, h: 20, type: 'static' },
        { x: 250, y: 340, w: 100, h: 20, type: 'static' },
        { x: 100, y: 270, w: 110, h: 20, type: 'static' },
        { x: 300, y: 210, w: 100, h: 20, type: 'static' },
        { x: 150, y: 150, w: 120, h: 20, type: 'static' },
        // Bridge section
        { x: 350, y: 150, w: 300, h: 20, type: 'static' },
        // Descending section
        { x: 700, y: 200, w: 100, h: 20, type: 'static' },
        { x: 850, y: 280, w: 110, h: 20, type: 'static', moving: true, moveAxis: 'x', moveMin: 800, moveMax: 920, moveSpeed: 35 },
        { x: 1000, y: 350, w: 100, h: 20, type: 'static' },
        { x: 1150, y: 300, w: 120, h: 20, type: 'static' },
        { x: 1300, y: 250, w: 100, h: 20, type: 'static' },
        { x: 1450, y: 320, w: 110, h: 20, type: 'static' },
        // End ground
        { x: 1500, y: 500, w: 300, h: 100, type: 'ground' },
        { x: 1550, y: 400, w: 150, h: 20, type: 'static' },
    ],
    stars: [
        { x: 250, y: 430 },
        { x: 110, y: 360 },
        { x: 300, y: 300 },
        { x: 155, y: 230 },
        { x: 350, y: 170 },
        { x: 210, y: 110 },
        { x: 500, y: 110 },
        { x: 750, y: 160 },
        { x: 910, y: 240 },
        { x: 1050, y: 310 },
        { x: 1210, y: 260 },
        { x: 1350, y: 210 },
        { x: 1510, y: 280 },
        { x: 1625, y: 360 },
        { x: 1700, y: 460 },
    ],
    enemies: [
        { x: 370, y: 114, patrolMin: 370, patrolMax: 600, speed: 35 },
        { x: 1000, y: 314, patrolMin: 1000, patrolMax: 1080, speed: 30 },
        { x: 1300, y: 214, patrolMin: 1300, patrolMax: 1380, speed: 35 },
        { x: 1550, y: 464, patrolMin: 1520, patrolMax: 1700, speed: 40 },
    ],
    crystal: { x: 1720, y: 450 },
    decorations: [
        { type: 'flower', x: 50, y: 550, color: '#9B59B6' },
        { type: 'flower', x: 150, y: 550, color: '#8E44AD' },
        { type: 'flower', x: 250, y: 550, color: '#9B59B6' },
        { type: 'flower', x: 1550, y: 500, color: '#8E44AD' },
        { type: 'flower', x: 1650, y: 500, color: '#9B59B6' },
        { type: 'flower', x: 1750, y: 500, color: '#8E44AD' },
    ],
};
