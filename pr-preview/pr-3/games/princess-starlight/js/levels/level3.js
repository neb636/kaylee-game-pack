// Level 3: Unicorn Bridge
export const level3Data = {
    width: 2200,
    playerStart: { x: 50, y: 440 },
    unicorn: { x: 200, y: 450 },
    platforms: [
        // Starting ground
        { x: 0, y: 500, w: 350, h: 100, type: 'ground' },
        // Lily pads / stepping stones over river
        { x: 400, y: 470, w: 80, h: 15, type: 'static' },
        { x: 540, y: 450, w: 80, h: 15, type: 'static', moving: true, moveAxis: 'y', moveMin: 430, moveMax: 470, moveSpeed: 30 },
        { x: 680, y: 460, w: 80, h: 15, type: 'static' },
        { x: 820, y: 440, w: 80, h: 15, type: 'static', moving: true, moveAxis: 'y', moveMin: 420, moveMax: 460, moveSpeed: 25 },
        // Middle island
        { x: 950, y: 500, w: 250, h: 100, type: 'ground' },
        { x: 1000, y: 380, w: 100, h: 20, type: 'static' },
        // More stepping stones
        { x: 1250, y: 450, w: 80, h: 15, type: 'static', moving: true, moveAxis: 'x', moveMin: 1230, moveMax: 1320, moveSpeed: 35 },
        { x: 1400, y: 440, w: 90, h: 15, type: 'static' },
        { x: 1550, y: 460, w: 80, h: 15, type: 'static' },
        // Rainbow bridge
        { x: 1680, y: 430, w: 200, h: 20, type: 'static' },
        // End ground
        { x: 1930, y: 500, w: 270, h: 100, type: 'ground' },
    ],
    stars: [
        { x: 180, y: 460 },
        { x: 440, y: 420 },
        { x: 580, y: 400 },
        { x: 720, y: 420 },
        { x: 860, y: 400 },
        { x: 1050, y: 340 },
        { x: 1300, y: 400 },
        { x: 1440, y: 400 },
        { x: 1780, y: 390 },
        { x: 2050, y: 460 },
    ],
    enemies: [
        { x: 1000, y: 464, patrolMin: 970, patrolMax: 1150, speed: 35 },
        { x: 1950, y: 464, patrolMin: 1950, patrolMax: 2100, speed: 40 },
    ],
    crystal: { x: 2100, y: 450 },
    decorations: [
        { type: 'flower', x: 50, y: 500, color: '#FF8C00' },
        { type: 'flower', x: 150, y: 500, color: '#FFA500' },
        { type: 'flower', x: 280, y: 500, color: '#FF8C00' },
        { type: 'flower', x: 1000, y: 500, color: '#FFA500' },
        { type: 'flower', x: 1100, y: 500, color: '#FF8C00' },
        { type: 'flower', x: 1980, y: 500, color: '#FFA500' },
        { type: 'flower', x: 2100, y: 500, color: '#FF8C00' },
        { type: 'tree', x: 30, y: 500, color: '#228B22' },
        { type: 'tree', x: 300, y: 500, color: '#2E8B57' },
        { type: 'bush', x: 1050, y: 500, color: '#32CD32' },
    ],
};
