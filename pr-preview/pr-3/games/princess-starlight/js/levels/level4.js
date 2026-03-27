// Level 4: Crystal Caves
export const level4Data = {
    width: 2000,
    playerStart: { x: 50, y: 440 },
    platforms: [
        // Cave floor
        { x: 0, y: 500, w: 500, h: 100, type: 'cave' },
        { x: 600, y: 500, w: 400, h: 100, type: 'cave' },
        { x: 1100, y: 500, w: 300, h: 100, type: 'cave' },
        { x: 1500, y: 500, w: 500, h: 100, type: 'cave' },
        // Cave ceiling (decorative thick platforms)
        { x: 0, y: 0, w: 2000, h: 50, type: 'cave' },
        // Cave shelves
        { x: 150, y: 400, w: 100, h: 20, type: 'cave' },
        { x: 350, y: 340, w: 120, h: 20, type: 'cave' },
        { x: 550, y: 380, w: 80, h: 20, type: 'cave' },
        { x: 700, y: 320, w: 100, h: 20, type: 'cave' },
        { x: 900, y: 400, w: 110, h: 20, type: 'cave' },
        { x: 1150, y: 360, w: 100, h: 20, type: 'cave' },
        { x: 1350, y: 400, w: 120, h: 20, type: 'cave' },
        { x: 1550, y: 350, w: 100, h: 20, type: 'cave' },
        { x: 1750, y: 380, w: 150, h: 20, type: 'cave' },
    ],
    stars: [
        { x: 200, y: 360 },
        { x: 410, y: 300 },
        { x: 590, y: 340 },
        { x: 750, y: 280 },
        { x: 850, y: 460 },
        { x: 960, y: 360 },
        { x: 1200, y: 320 },
        { x: 1410, y: 360 },
        { x: 1600, y: 310 },
        { x: 1825, y: 340 },
    ],
    enemies: [
        { x: 200, y: 464, patrolMin: 100, patrolMax: 400, speed: 40 },
        { x: 700, y: 464, patrolMin: 620, patrolMax: 900, speed: 45 },
        { x: 1550, y: 464, patrolMin: 1520, patrolMax: 1800, speed: 40 },
    ],
    crystal: { x: 1900, y: 450 },
    decorations: [],
};
