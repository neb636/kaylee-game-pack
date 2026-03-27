# Kaylee's Game World

A personalized game launcher and collection of browser-based games for Kaylee (age 5). She loves princesses, unicorns, and animals.

## Tech Stack

- **Phaser 3** for game development (loaded from `/node_modules/phaser/dist/phaser.min.js`)
- **Howler.js** for audio (loaded from `/node_modules/howler/dist/howler.min.js`)
- **Vanilla HTML/CSS/JS** — no build step, no bundler
- **PWA** — `manifest.json` + `sw.js` for offline support and home screen install
- **Static hosting** via GitHub Pages (auto-deploy from main branch)
- **`serve`** for local dev (`npm start` → http://localhost:3000)

## Project Structure

- `index.html` — Game launcher (tile grid)
- `manifest.json` — PWA manifest
- `sw.js` — Service worker (network-first with cache fallback)
- `icons/` — PWA icons (icon-192.png, icon-512.png) — **TODO: add actual icons**
- `css/` — Launcher styles (`launcher.css`, `style.css`)
- `games/_template/index.html` — Starter template for new games
- `games/<game-name>/index.html` — Each game is self-contained in its own folder
- `games/princess-starlight/js/launcher.js` — Game registry (add new games here)
- `packs/` — Purchased asset packs (from craftpix.net and itch.io)
- `games-prompts.md` — Reusable prompts for building each game
- `GAMES_ROADMAP.md` — Full game list, architecture, and build order

## Game Development Rules

Every game MUST follow these conventions:

1. **Self-contained** — each game lives in `games/<game-name>/` with its own `index.html`
2. **Back button** — include a `🏠 Games` button (top-left) linking to `/index.html`
3. **Font** — use Fredoka One from Google Fonts CDN for all text
4. **Color palette** — match the launcher's pink/purple theme
5. **Tap targets** — large, finger-friendly buttons and interactive elements
6. **No fail states** — no game-over screens, no punishment. Only encouragement and celebration
7. **Multi-device** — must work on iPad, iPhone, and macOS desktop. Support touch, mouse, and keyboard input. Visually optimized for all screen sizes
8. **Explore assets first** — always explore the asset pack folder before writing any code to understand what sprites, backgrounds, and UI elements are available
9. **Personalization** — use Kaylee's name in win screens and celebrations

## Audio (Howler.js)

- Use Howler.js for all game audio — it handles iOS audio unlock automatically
- iOS requires a user gesture before audio can play. Howler handles this, but make sure the first sound plays in response to a tap/click (not on scene load)
- Keep sound effects short and cheerful — celebration chimes, gentle pops, sparkle sounds
- Load audio in the Phaser `preload()` method but play via Howler (not Phaser's sound manager) for better cross-device compatibility
- Common pattern:
  ```js
  const sfx = {
    pop: new Howl({ src: ['/games/GAME/audio/pop.mp3'] }),
    win: new Howl({ src: ['/games/GAME/audio/win.mp3'] }),
  };
  ```

## PWA / Service Worker

- `manifest.json` defines the installable app (name, icons, theme color)
- `sw.js` uses network-first strategy with cache fallback for offline play
- When adding new games, update the `CACHE_NAME` version in `sw.js` to bust the cache
- **TODO:** Generate proper 192x192 and 512x512 icons for `icons/` folder

## When Building New Games

1. Copy `games/_template/index.html` as a starting point
2. Check `GAMES_ROADMAP.md` for the game spec and asset pack location
3. Check `games-prompts.md` for the ready-to-use build prompt
4. Explore the asset pack in `packs/` thoroughly before coding
5. Register the new game in the launcher config (`games/princess-starlight/js/launcher.js`)
6. Bump `CACHE_NAME` in `sw.js` if caching matters

## When Brainstorming New Games

- Think creatively and outside the box — it's OK to suggest ambitious ideas
- Only suggest things that are feasible to build as browser games with Phaser 3
- Target audience is a 5-year-old girl who loves princesses, unicorns, and animals
- Keep mechanics simple — one main interaction (tap, drag, arrow keys)
- Prefer nurturing/exploration/creative themes over competitive/violent ones
- No fail states, no timers counting down, no pressure

## Working With This Developer

- The developer is a senior UI engineer experienced in JS/TS and UI frameworks
- They have minimal game development experience — explain game-specific patterns and best practices (physics, sprite sheets, tilemaps, collision detection, game loops, etc.) when relevant
- Don't over-explain web fundamentals (DOM, CSS, JS patterns) — they know those well
- Game assets are purchased from craftpix.net and itch.io — reference pack contents when discussing implementation
