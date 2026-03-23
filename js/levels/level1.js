// Level 1: Sparkle Garden (Tutorial)
export const level1Data = {
    width: 1600,
    playerStart: { x: 50, y: 440 },
    platforms: [
        // Ground segments (with a gap)
        { x: 0, y: 500, w: 900, h: 100, type: 'ground' },
        { x: 1050, y: 500, w: 550, h: 100, type: 'ground' },
        // Elevated platforms
        { x: 200, y: 380, w: 120, h: 20, type: 'static' },
        { x: 450, y: 340, w: 100, h: 20, type: 'static' },
        { x: 700, y: 400, w: 120, h: 20, type: 'static' },
        { x: 1100, y: 370, w: 130, h: 20, type: 'static' },
        { x: 1350, y: 400, w: 200, h: 20, type: 'static' },
    ],
    stars: [
        { x: 300, y: 460 },   // On ground, unmissable
        { x: 260, y: 340 },   // On platform
        { x: 500, y: 300 },   // Above platform
        { x: 760, y: 360 },   // On platform
        { x: 1165, y: 330 },  // On platform near end
    ],
    enemies: [
        { x: 500, y: 464, patrolMin: 450, patrolMax: 650, speed: 35 },
    ],
    crystal: { x: 1480, y: 350 },
    decorations: [
        // Flowers along the ground
        { type: 'flower', x: 80, y: 500, color: '#FF69B4' },
        { type: 'flower', x: 150, y: 500, color: '#FF1493' },
        { type: 'flower', x: 320, y: 500, color: '#FFB6C1' },
        { type: 'flower', x: 420, y: 500, color: '#FF69B4' },
        { type: 'flower', x: 580, y: 500, color: '#DA70D6' },
        { type: 'flower', x: 700, y: 500, color: '#FF69B4' },
        { type: 'flower', x: 800, y: 500, color: '#FFB6C1' },
        { type: 'flower', x: 1100, y: 500, color: '#FF1493' },
        { type: 'flower', x: 1200, y: 500, color: '#FF69B4' },
        { type: 'flower', x: 1350, y: 500, color: '#DA70D6' },
        { type: 'flower', x: 1450, y: 500, color: '#FFB6C1' },
        // Bushes
        { type: 'bush', x: 130, y: 500, color: '#32CD32' },
        { type: 'bush', x: 650, y: 500, color: '#228B22' },
        { type: 'bush', x: 1250, y: 500, color: '#32CD32' },
        // Trees
        { type: 'tree', x: 50, y: 500, color: '#228B22' },
        { type: 'tree', x: 850, y: 500, color: '#2E8B57' },
        { type: 'tree', x: 1500, y: 500, color: '#228B22' },
    ],
};
