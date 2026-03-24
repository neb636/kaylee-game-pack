// Level 2: Bouncy Meadow
export const level2Data = {
    width: 2000,
    playerStart: { x: 50, y: 440 },
    platforms: [
        // Ground segments with gaps
        { x: 0, y: 500, w: 400, h: 100, type: 'ground' },
        { x: 550, y: 500, w: 300, h: 100, type: 'ground' },
        { x: 1000, y: 500, w: 400, h: 100, type: 'ground' },
        { x: 1550, y: 500, w: 450, h: 100, type: 'ground' },
        // Static platforms
        { x: 250, y: 400, w: 100, h: 20, type: 'static' },
        { x: 600, y: 380, w: 120, h: 20, type: 'static' },
        { x: 900, y: 420, w: 100, h: 20, type: 'static' },
        { x: 1200, y: 370, w: 110, h: 20, type: 'static' },
        { x: 1500, y: 350, w: 100, h: 20, type: 'static' },
        { x: 1750, y: 400, w: 200, h: 20, type: 'static' },
        // Moving platforms
        { x: 430, y: 450, w: 100, h: 20, type: 'static', moving: true, moveAxis: 'x', moveMin: 400, moveMax: 530, moveSpeed: 40 },
        { x: 1420, y: 430, w: 80, h: 20, type: 'static', moving: true, moveAxis: 'y', moveMin: 380, moveMax: 460, moveSpeed: 35 },
    ],
    stars: [
        { x: 200, y: 460 },
        { x: 300, y: 360 },
        { x: 660, y: 340 },
        { x: 950, y: 380 },
        { x: 1100, y: 460 },
        { x: 1260, y: 330 },
        { x: 1550, y: 310 },
        { x: 1850, y: 360 },
    ],
    enemies: [
        { x: 100, y: 464, patrolMin: 50, patrolMax: 350, speed: 40 },
        { x: 1100, y: 464, patrolMin: 1050, patrolMax: 1300, speed: 45 },
    ],
    crystal: { x: 1880, y: 350 },
    decorations: [
        { type: 'flower', x: 80, y: 500, color: '#FF4444' },
        { type: 'flower', x: 180, y: 500, color: '#FF6347' },
        { type: 'flower', x: 350, y: 500, color: '#FF4444' },
        { type: 'flower', x: 600, y: 500, color: '#FF6347' },
        { type: 'flower', x: 750, y: 500, color: '#FF4444' },
        { type: 'flower', x: 1050, y: 500, color: '#FF6347' },
        { type: 'flower', x: 1200, y: 500, color: '#FF4444' },
        { type: 'flower', x: 1600, y: 500, color: '#FF6347' },
        { type: 'bush', x: 300, y: 500, color: '#32CD32' },
        { type: 'bush', x: 700, y: 500, color: '#228B22' },
        { type: 'bush', x: 1300, y: 500, color: '#32CD32' },
        { type: 'tree', x: 50, y: 500, color: '#228B22' },
        { type: 'tree', x: 500, y: 500, color: '#2E8B57' },
        { type: 'tree', x: 1400, y: 500, color: '#228B22' },
        { type: 'tree', x: 1900, y: 500, color: '#2E8B57' },
    ],
};
