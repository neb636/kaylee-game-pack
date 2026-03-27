// Level 10: The Friendship Finale
export const level10Data = {
    width: 1200,
    playerStart: { x: 50, y: 440 },
    platforms: [
        // Arena floor
        { x: 0, y: 500, w: 1200, h: 100, type: 'ground' },
        // Side platforms for dodging
        { x: 50, y: 380, w: 100, h: 20, type: 'static' },
        { x: 250, y: 330, w: 120, h: 20, type: 'static' },
        { x: 500, y: 350, w: 150, h: 20, type: 'static' },
        { x: 750, y: 330, w: 120, h: 20, type: 'static' },
        { x: 1000, y: 380, w: 100, h: 20, type: 'static' },
        // Boss platform
        { x: 450, y: 200, w: 300, h: 20, type: 'static' },
    ],
    stars: [
        { x: 100, y: 340 },
        { x: 310, y: 290 },
        { x: 575, y: 310 },
        { x: 810, y: 290 },
        { x: 1050, y: 340 },
        { x: 200, y: 460 },
        { x: 400, y: 460 },
        { x: 600, y: 160 },
        { x: 800, y: 460 },
        { x: 1000, y: 460 },
    ],
    enemies: [
        // The Robot King! (big, slow, not too scary)
        { x: 550, y: 450, patrolMin: 300, patrolMax: 800, speed: 55, isBoss: true },
    ],
    crystal: { x: 600, y: 150 },
    decorations: [
        { type: 'flower', x: 100, y: 500, color: '#FFD700' },
        { type: 'flower', x: 300, y: 500, color: '#FFD700' },
        { type: 'flower', x: 500, y: 500, color: '#FFD700' },
        { type: 'flower', x: 700, y: 500, color: '#FFD700' },
        { type: 'flower', x: 900, y: 500, color: '#FFD700' },
        { type: 'flower', x: 1100, y: 500, color: '#FFD700' },
    ],
};
