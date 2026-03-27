# Kaylee's Game World — Build Prompts

Games listed in recommended build order (simplest → most complex).
Each game is self-contained in its own folder under `games/`.

**Standard rules for every game:**
- Use Phaser 3 from `/node_modules/phaser/dist/phaser.min.js`
- Include a `🏠 Games` back button (top-left) linking to `/index.html`
- Use Fredoka One font (Google Fonts CDN) for all text
- Match the pink/purple palette of the launcher
- Large tap targets — finger-friendly for a 5-year-old
- No fail states, no game-over screens — only encouragement
- Explore the asset pack folder first before writing any code

---

## Game 1 — Animal Alphabet Adventure

**Folder:** `games/alphabet-adventure/`
**Pack:** `packs/craftpix-net-248177-scrabble-animals-game-asset-pack/`

```
Build the Animal Alphabet Adventure game for Kaylee (age 5).

Location: games/alphabet-adventure/index.html (self-contained).
Use Phaser 3 from /node_modules/phaser/dist/phaser.min.js.
Include a "🏠 Games" back button linking to /index.html.

Asset pack: packs/craftpix-net-248177-scrabble-animals-game-asset-pack/
Explore that folder first to see exactly what images are available before
writing any code.

Mechanic:
- A large letter tile appears at the top (e.g. "B")
- 3 animal images appear below as answer choices
- One animal's name starts with that letter; the other two are distractors
- Tap the correct animal → big star burst celebration, cheerful sound, next question
- Tap the wrong animal → gentle shake animation, try again (no penalty, no fail state)
- After 10 correct answers → win screen with confetti and "You're a star, Kaylee!"

Design: bright, colorful, large tap targets. Use Fredoka One (Google Fonts).
Match the pink/purple launcher palette.

Build the full working game — explore assets first, then implement.
```

---

## Game 2 — Animal Friends Memory Match

**Folder:** `games/memory-match/`
**Pack:** `packs/top-down-cute-farm-animals-pixel-sprite/`

```
Build the Animal Friends Memory Match game for Kaylee (age 5).

Location: games/memory-match/index.html (self-contained).
Use Phaser 3 from /node_modules/phaser/dist/phaser.min.js.
Include a "🏠 Games" back button linking to /index.html.

Asset pack: packs/top-down-cute-farm-animals-pixel-sprite/
Explore that folder first to see exactly what animal sprites are available
before writing any code.

Mechanic:
- 4×4 grid of face-down cards (16 cards = 8 matching pairs)
- Each card hides one animal sprite from the pack
- Click a card to flip it face-up with a smooth flip animation
- Click a second card: if they match → both stay face-up, sparkle effect, cheer sound
- If they don't match → both flip back after 1 second, gentle wobble
- When all 8 pairs are found → win screen: confetti, "Amazing memory, Kaylee!"
- Show a star counter and flip counter so she can try to beat her score

Design: pastel card backs with a star pattern. Cards should be large and
easy to tap. Fredoka One font. Pink/purple palette.

Build the full working game — explore assets first, then implement.
```

---

## Game 3 — Rainbow Fish Catcher

**Folder:** `games/fish-catcher/`
**Pack:** `packs/craftpix-net-258377-free-fishing-game-assets-pixel-art-pack/`

```
Build the Rainbow Fish Catcher game for Kaylee (age 5).

Location: games/fish-catcher/index.html (self-contained).
Use Phaser 3 from /node_modules/phaser/dist/phaser.min.js.
Include a "🏠 Games" back button linking to /index.html.

Asset pack: packs/craftpix-net-258377-free-fishing-game-assets-pixel-art-pack/
Also check: packs/2d-pixel-fishing-village-pack-dock-interior-boats-npcs/
Explore both folders first to see what background, fisherman, and fish sprites
are available before writing any code.

Mechanic:
- Scene: dock/water background from the pack
- Colorful fish swim horizontally across the screen at varying speeds and depths
- Click/tap anywhere to cast the fishing line straight down from the dock
- If the line reaches a fish → catch animation, fish pops up, +1 score
- Catch 10 fish to win → celebration screen "You caught 10 fish, Kaylee!"
- One cast at a time; line retracts automatically after 2 seconds
- Different colored fish = different point values (show as stars: ⭐ ⭐⭐ ⭐⭐⭐)

Design: bright blue water, sunny sky. Use all available fish sprites for variety.
Simple one-tap mechanic — perfect for small hands. Fredoka One font.

Build the full working game — explore assets first, then implement.
```

---

## Game 4 — Animal Hide & Seek

**Folder:** `games/hide-and-seek/`
**Pack:** `packs/free-top-down-hunt-animals-pixel-sprite-pack/`

```
Build the Animal Hide & Seek game for Kaylee (age 5).

Location: games/hide-and-seek/index.html (self-contained).
Use Phaser 3 from /node_modules/phaser/dist/phaser.min.js.
Include a "🏠 Games" back button linking to /index.html.

Asset pack: packs/free-top-down-hunt-animals-pixel-sprite-pack/
Explore that folder first to catalog every animal sprite available.

Mechanic:
- A woodland/meadow scene (draw it with simple shapes and colors if no background
  is in the pack — green ground, trees, bushes, flowers)
- 8 animals are hidden around the scene — partially behind bushes or trees,
  some blending into the background
- A panel on the side shows silhouettes of which animals still need to be found
- Click an animal → it pops out with a happy animation (use its Walk or Run frames),
  plays a cheer sound, and gets checked off the silhouette panel
- Find all 8 → win screen "You found everyone! Great job, Kaylee!"
- A gentle timer counts UP (not down) — no pressure, just a fun record to beat

Design: bright cheerful colors, animals should be large enough to tap easily.
Fredoka One font. Pink/purple UI panels.

Build the full working game — explore assets first, then implement.
```

---

## Game 5 — Kitty & Friends Parade

**Folder:** `games/animal-parade/`
**Pack:** `packs/urban-animals-sprite-sheet-pixel-art-pack/`

```
Build the Kitty & Friends Parade game for Kaylee (age 5).

Location: games/animal-parade/index.html (self-contained).
Use Phaser 3 from /node_modules/phaser/dist/phaser.min.js.
Include a "🏠 Games" back button linking to /index.html.

Asset pack: packs/urban-animals-sprite-sheet-pixel-art-pack/
Explore that folder first to catalog all 6 animals and their animation frames
(Idle, Walk, Jump, Attack, Special) before writing any code.

Mechanic:
- Animals parade across the screen from right to left using their Walk animation
- A glowing spotlight circle sits at the center of the screen
- When an animal walks INTO the spotlight, a visual cue pulses (ring expands)
- Tap/click while the animal is inside the spotlight → it plays its Special
  animation, stars burst out, +1 star score
- Tap outside the spotlight window → gentle miss sound, no penalty
- Animals come in waves, getting slightly faster every 5 taps
- After collecting 20 stars → parade finale: all animals dance on screen together,
  confetti, "What a party, Kaylee!"

Design: festive parade background (colorful banners, drawn with shapes).
Large spotlight effect. Star score counter top-right. Fredoka One font.

Build the full working game — explore assets first, then implement.
```

---

## Game 6 — Happy Farm Helper

**Folder:** `games/farm-helper/`
**Pack:** `packs/craftpix-net-471853-top-down-farm-with-animals-pixel-art-asset-pack/`

```
Build the Happy Farm Helper game for Kaylee (age 5).

Location: games/farm-helper/index.html (self-contained).
Use Phaser 3 from /node_modules/phaser/dist/phaser.min.js.
Include a "🏠 Games" back button linking to /index.html.

Asset packs:
  packs/craftpix-net-471853-top-down-farm-with-animals-pixel-art-asset-pack/
  packs/top-down-farm-with-animals-pixel-art-asset-pack/
Explore both folders first — look for tilesets, animal sprites, and any
character sprites before writing any code.

Mechanic:
- Top-down farm world built from the tileset
- Kaylee controls a small farmer character with arrow keys (or WASD)
- 6–8 animals are placed around the farm, each showing a hunger indicator
  (a small speech bubble with a food emoji above their head)
- Walk up to a hungry animal and press Space (or tap the animal) to feed it →
  heart particles float up, the animal does a happy animation, hunger clears
- Feed all animals → win screen "The animals are all happy! Thanks, Kaylee!"
- No enemies, no timers, no fail state — purely nurturing exploration

Design: use the tileset for the farm background. Keep the world small enough
that all animals are reachable within ~60 seconds of calm walking.
Fredoka One font. Pink/purple UI.

Build the full working game — explore assets first, then implement.
```

---

## Game 7 — Snowflake Winter Wonderland

**Folder:** `games/winter-wonderland/`
**Pack:** `packs/winter-forest-pixel-art-top-down-tileset/`

```
Build the Snowflake Winter Wonderland game for Kaylee (age 5).

Location: games/winter-wonderland/index.html (self-contained).
Use Phaser 3 from /node_modules/phaser/dist/phaser.min.js.
Include a "🏠 Games" back button linking to /index.html.

Asset pack: packs/winter-forest-pixel-art-top-down-tileset/
Explore that folder first — look for tiles, character sprites, and any
decorative elements before writing any code.

Mechanic:
- Top-down snowy forest world built from the winter tileset
- Kaylee controls a small character with arrow keys (or WASD)
- 12 glowing snowflakes are scattered across the map (drawn as sparkly white
  rotating stars if no snowflake asset exists in the pack)
- Walking over a snowflake collects it → soft chime sound, sparkle burst
- A snowflake counter shows progress: "❄️ 7 / 12"
- Collect all 12 → fireworks fill the sky, "You found all the snowflakes, Kaylee!"
- Optional collectibles: hot cocoa cups that add a cozy particle effect when grabbed
- No enemies, no timers, no fail state — calm peaceful exploration

Design: soft blues and whites, cozy atmosphere. Gentle snowfall particle effect
drifting down the screen the whole time. Fredoka One font.

Build the full working game — explore assets first, then implement.
```

---

## Game 8 — Bubble Pop Princess

**Folder:** `games/bubble-pop/`
**Pack:** `packs/craftpix-781165-bubble-shooter-game-assets-pack/`

```
Build the Bubble Pop Princess game for Kaylee (age 5).

Location: games/bubble-pop/index.html (self-contained).
Use Phaser 3 from /node_modules/phaser/dist/phaser.min.js.
Include a "🏠 Games" back button linking to /index.html.

Asset pack: packs/craftpix-781165-bubble-shooter-game-assets-pack/
Explore that folder thoroughly first — catalog all bubble colors, UI elements,
character sprites, and background assets before writing any code.

Mechanic:
- Grid of colored bubbles fills the top 60% of the screen (8 columns × 6 rows)
- A launcher sits at the bottom center with the next bubble color shown
- Click/tap a column to fire the bubble straight up into that column
  (no arc trajectory — straight up is simpler for age 5)
- When 3 or more same-color bubbles connect → they pop with a satisfying burst,
  any bubbles hanging below with no connection also fall and pop
- After each shot, a new row of bubbles does NOT appear (keep it simple)
- Clear all bubbles → win screen "You popped them all, Kaylee!"
- Show a pop counter (how many bubbles popped total)

Design: use the pack's bubble sprites, background, and UI elements as much as
possible. The pack has pre-made game screens — use them! Fredoka One font.

Build the full working game — explore assets first, then implement.
```

---

## Game 9 — Raccoon Rescue Bubble Blast

**Folder:** `games/raccoon-rescue/`
**Pack:** `packs/craftpix-net-685682-raccon-rescue-bubble-shooter-game-assets/`

```
Build the Raccoon Rescue Bubble Blast game for Kaylee (age 5).

Location: games/raccoon-rescue/index.html (self-contained).
Use Phaser 3 from /node_modules/phaser/dist/phaser.min.js.
Include a "🏠 Games" back button linking to /index.html.

Asset pack: packs/craftpix-net-685682-raccon-rescue-bubble-shooter-game-assets/
Explore that folder thoroughly first — catalog ALL UI screens, bubble sprites,
raccoon characters, backgrounds, and buttons before writing any code.
Use as much of the pre-made UI as possible.

Mechanic (similar to Game 8 but story-driven):
- Opening screen: "Oh no! The raccoons are trapped in bubbles! Help free them!"
  Use raccoon character art from the pack for this intro.
- Grid of colored bubbles — some bubbles contain a trapped raccoon sprite inside
- Aim and shoot (straight-up column targeting like Game 8)
- Pop a bubble containing a raccoon → raccoon bounces free, happy animation,
  "Saved!" text floats up
- Free all raccoons → celebration screen using the pack's win UI:
  "You rescued all the raccoons, Kaylee! You're a hero!"
- Show rescued raccoon count: "🦝 3 / 8 rescued"

Design: use every pre-made UI asset from the pack (backgrounds, buttons, panels).
This pack has complete game screens — lean on them heavily.
Fredoka One font for any custom text.

Build the full working game — explore assets first, then implement.
```

---

## Game 10 — Forest Gem Match (Match-3)

**Folder:** `games/forest-match/`
**Pack:** `packs/craftpix-net-741915-forest-match-3-gui-assets/`

```
Build the Forest Gem Match game for Kaylee (age 5). This is a simplified
Match-3 puzzle game (like Candy Crush but gentler).

Location: games/forest-match/index.html (self-contained).
Use Phaser 3 from /node_modules/phaser/dist/phaser.min.js.
Include a "🏠 Games" back button linking to /index.html.

Asset pack: packs/craftpix-net-741915-forest-match-3-gui-assets/
Also check: packs/craftpix-net-124879-halloween-match-3-game-ui-assets/
Explore both folders thoroughly first — catalog all gem/tile types, UI screens,
backgrounds, buttons, and map assets before writing any code.
Use as much pre-made UI as possible.

Mechanic:
- 7×7 board of colorful forest gems (use gem/tile sprites from the pack)
- Click one gem, then click an adjacent gem to swap them
- If the swap creates a row or column of 3+ matching gems → they pop,
  gems above fall down (gravity), empty spaces fill with new random gems
- No timer, unlimited moves — pure relaxed puzzle play
- Goal: reach a target score (e.g. pop 30 gems total) to win the level
- 3 simple levels with increasing target scores
- Win screen after level 3: "You cleared the forest, Kaylee! Amazing!"

Simplifications for age 5:
- No time pressure
- Highlight valid swap targets when a gem is selected (glow effect)
- Show a progress bar toward the target score
- Celebrate every match with a small burst animation

Design: use all pre-made game screens, backgrounds, and UI from the pack.
Fredoka One font for custom text.

Build the full working game — explore assets first, then implement.
```
