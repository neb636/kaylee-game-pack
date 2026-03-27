export class Physics {
    constructor() {
        this.gravity = 600;
        this.maxFallSpeed = 400;
    }

    applyGravity(entity, dt) {
        entity.vy += this.gravity * dt;
        if (entity.vy > this.maxFallSpeed) {
            entity.vy = this.maxFallSpeed;
        }
        entity.y += entity.vy * dt;
    }

    resolvePlatformCollisions(entity, platforms, dt) {
        entity.onGround = false;

        for (const platform of platforms) {
            const px = platform.x;
            const py = platform.y;
            const pw = platform.width;
            const ph = platform.height;

            // Check AABB overlap
            if (
                entity.x + entity.width > px &&
                entity.x < px + pw &&
                entity.y + entity.height > py &&
                entity.y + entity.height < py + ph + entity.vy * dt + 5
            ) {
                // Only resolve if falling down onto the platform
                if (entity.vy >= 0) {
                    entity.y = py - entity.height;
                    entity.vy = 0;
                    entity.onGround = true;

                    // Bouncy platform
                    if (platform.type === 'bouncy') {
                        entity.vy = -500;
                        entity.onGround = false;
                    }

                    // Moving platform - carry the entity
                    if (platform.moving && platform.vx) {
                        entity.x += platform.vx * dt;
                    }
                }
            }

            // Side collisions (walls) - only for thick platforms
            if (ph > 30) {
                if (
                    entity.y + entity.height > py + 5 &&
                    entity.y < py + ph - 5
                ) {
                    // Hitting from left
                    if (
                        entity.x + entity.width > px &&
                        entity.x + entity.width < px + 10 &&
                        entity.vx > 0
                    ) {
                        entity.x = px - entity.width;
                    }
                    // Hitting from right
                    if (
                        entity.x < px + pw &&
                        entity.x > px + pw - 10 &&
                        entity.vx < 0
                    ) {
                        entity.x = px + pw;
                    }
                }
            }
        }
    }

    checkEntityCollision(princess, enemy) {
        const px = princess.x;
        const py = princess.y;
        const pw = princess.width;
        const ph = princess.height;

        const ex = enemy.x;
        const ey = enemy.y;
        const ew = enemy.width;
        const eh = enemy.height;

        // Check if overlapping at all
        if (
            px + pw > ex + 5 &&
            px < ex + ew - 5 &&
            py + ph > ey + 5 &&
            py < ey + eh
        ) {
            // Check if stomping (princess is falling and above enemy midpoint)
            if (princess.vy > 0 && py + ph < ey + eh * 0.6) {
                return 'stomp';
            }
            return 'damage';
        }
        return null;
    }

    checkCollection(princess, item) {
        const px = princess.x + princess.width / 2;
        const py = princess.y + princess.height / 2;
        const radius = 40; // Generous collection radius

        const dx = px - item.x;
        const dy = py - item.y;
        return dx * dx + dy * dy < radius * radius;
    }

    checkNearby(princess, npc, range) {
        const px = princess.x + princess.width / 2;
        const nx = npc.x + npc.width / 2;
        const py = princess.y + princess.height / 2;
        const ny = npc.y + npc.height / 2;
        const dx = px - nx;
        const dy = py - ny;
        return dx * dx + dy * dy < range * range;
    }
}
