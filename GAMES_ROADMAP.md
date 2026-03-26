# Kaylee's Game World — Games Roadmap

A tile-based game launcher for Kaylee (age 5). Each game lives in its own folder under `games/`.
The launcher at `index.html` shows all games as clickable tiles.

---

## How to Run

```bash
npm start   # serves at http://localhost:3000
```

---

## Architecture

```
/
├── index.html                  ← Launcher (tile grid)
├── platformer.html             ← Existing Princess Starlight game entry
├── css/
│   ├── style.css               ← Global body styles
│   └── launcher.css            ← Launcher-specific styles
├── js/
│   ├── launcher.js             ← Game registry + tile rendering
│   └── ... (existing platformer JS)
├── games/
│   ├── memory-match/           ← Game 1
│   ├── fish-catcher/           ← Game 2
│   ├── bubble-pop/             ← Game 3
│   ├── farm-helper/            ← Game 4
│   ├── hide-and-seek/          ← Game 5
│   ├── alphabet-adventure/     ← Game 6
│   ├── raccoon-rescue/         ← Game 7
│   ├── forest-match/           ← Game 8
│   ├── animal-parade/          ← Game 9
│   └── winter-wonderland/      ← Game 10
├── packs/                      ← Purchased asset packs
└── node_modules/phaser/        ← Phaser 3 (for game development)
```

**Phaser 3** is installed via npm. Each game can reference it at:
`/node_modules/phaser/dist/phaser.min.js`

---

## Game List

| # | Game | Status | Pack(s) Used | Folder |
|---|------|--------|--------------|--------|
| 0 | Princess Starlight & the Rainbow Crystal Quest | ✅ Done | (procedural) | `platformer.html` |
| 1 | Animal Friends Memory Match | 🔒 Todo | `top-down-cute-farm-animals-pixel-sprite` | `games/memory-match/` |
| 2 | Rainbow Fish Catcher | 🔒 Todo | `craftpix-net-258377-free-fishing-game-assets-pixel-art-pack` | `games/fish-catcher/` |
| 3 | Bubble Pop Princess | 🔒 Todo | `craftpix-781165-bubble-shooter-game-assets-pack` | `games/bubble-pop/` |
| 4 | Happy Farm Helper | 🔒 Todo | `craftpix-net-471853-top-down-farm-with-animals-pixel-art-asset-pack` | `games/farm-helper/` |
| 5 | Animal Hide & Seek | 🔒 Todo | `free-top-down-hunt-animals-pixel-sprite-pack` | `games/hide-and-seek/` |
| 6 | Animal Alphabet Adventure | 🔒 Todo | `craftpix-net-248177-scrabble-animals-game-asset-pack` | `games/alphabet-adventure/` |
| 7 | Raccoon Rescue Bubble Blast | 🔒 Todo | `craftpix-net-685682-raccon-rescue-bubble-shooter-game-assets` | `games/raccoon-rescue/` |
| 8 | Forest Gem Match (Match-3) | 🔒 Todo | `craftpix-net-741915-forest-match-3-gui-assets` | `games/forest-match/` |
| 9 | Kitty & Friends Parade | 🔒 Todo | `urban-animals-sprite-sheet-pixel-art-pack` | `games/animal-parade/` |
| 10 | Snowflake Winter Wonderland | 🔒 Todo | `winter-forest-pixel-art-top-down-tileset` | `games/winter-wonderland/` |

---

## Game Details

### 1. Animal Friends Memory Match
- **Pack:** `packs/top-down-cute-farm-animals-pixel-sprite/`
- **Mechanic:** Flip cards to find matching animal pairs (rabbits, horses, goats, goslings)
- **Grid:** 4×4 (16 cards = 8 pairs) — easy mode starts at 3×4
- **Win:** All pairs found → celebration animation
- **Build notes:** Canvas or DOM. Load sprite PNGs as card faces. Click detection. Flip animation with CSS transform.

### 2. Rainbow Fish Catcher
- **Pack:** `packs/craftpix-net-258377-free-fishing-game-assets-pixel-art-pack/`
- **Mechanic:** Fish swim across screen; click/tap to catch them. Catch 10 to win.
- **Build notes:** Phaser 3. Fish as moving sprites. Click = cast line. Score counter. 60-second timer.

### 3. Bubble Pop Princess
- **Pack:** `packs/craftpix-781165-bubble-shooter-game-assets-pack/`
- **Mechanic:** Aim and shoot colored bubbles. Match 3+ same color to pop.
- **Simplification:** Click a column to fire straight up (no arc physics for 5-year-olds).
- **Build notes:** Phaser 3. Grid of bubbles. Color matching flood-fill logic.

### 4. Happy Farm Helper
- **Pack:** `packs/craftpix-net-471853-top-down-farm-with-animals-pixel-art-asset-pack/`
- **Mechanic:** Top-down farm; walk to animals and click to feed them. No fail state.
- **Build notes:** Phaser 3. Tiled map. Arrow key movement. Proximity trigger for feeding.

### 5. Animal Hide & Seek
- **Pack:** `packs/free-top-down-hunt-animals-pixel-sprite-pack/`
- **Mechanic:** Animals partially hidden in woodland scene. Click to find all. Timer counts up.
- **Build notes:** Phaser 3 or DOM. Place sprites at fixed positions, partially behind bushes. Click hitbox detection.

### 6. Animal Alphabet Adventure
- **Pack:** `packs/craftpix-net-248177-scrabble-animals-game-asset-pack/`
- **Mechanic:** A letter appears; pick the animal whose name starts with it from 3 choices.
- **Build notes:** Phaser 3 or plain JS. Letter A–Z dataset. Animal images from pack. Click = correct/wrong feedback. Sound effects.

### 7. Raccoon Rescue Bubble Blast
- **Pack:** `packs/craftpix-net-685682-raccon-rescue-bubble-shooter-game-assets/`
- **Mechanic:** Raccoons trapped in bubbles. Match-color shooting to free them.
- **Build notes:** Similar to Game 3 but raccoon-themed story wrapper. Uses full pre-made UI from pack.

### 8. Forest Gem Match (Match-3)
- **Pack:** `packs/craftpix-net-741915-forest-match-3-gui-assets/`
- **Mechanic:** Swap adjacent gems to make rows of 3+. No timer, no pressure.
- **Build notes:** Phaser 3. Most complex game. Board state array, swap logic, match detection, gravity fill.

### 9. Kitty & Friends Parade
- **Pack:** `packs/urban-animals-sprite-sheet-pixel-art-pack/`
- **Mechanic:** Animals parade across screen. Tap each when it hits a spotlight for their special animation.
- **Build notes:** Phaser 3. Sprite animations (Walk/Special). Spotlight zone. Timing-based tap scoring.

### 10. Snowflake Winter Wonderland
- **Pack:** `packs/winter-forest-pixel-art-top-down-tileset/`
- **Mechanic:** Gentle top-down exploration. Collect snowflakes, no enemies, no fail state. Fireworks when all found.
- **Build notes:** Phaser 3. Tiled map from tileset. Arrow key movement. Collectible snowflake sprites.

---

## Recommended Build Order

Start with simplest mechanics:
1. Animal Alphabet Adventure (asset display + click)
2. Animal Friends Memory Match (classic mechanic)
3. Rainbow Fish Catcher (one-button)
4. Animal Hide & Seek (sprite + click)
5. Kitty & Friends Parade (timing)
6. Happy Farm Helper (top-down movement)
7. Snowflake Winter Wonderland (top-down + tilemap)
8. Bubble Pop Princess (color matching)
9. Raccoon Rescue Bubble Blast (bubble shooter)
10. Forest Gem Match (match-3 board logic)
