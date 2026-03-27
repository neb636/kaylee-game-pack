# Kaylee's Game World

A personalized game launcher and collection of browser-based games built for Kaylee. Hosted on GitHub Pages so family and friends can play too.

## Play

**Live:** [GitHub Pages link] (add after deploying)

On iPad/iPhone: open the link in Safari, tap Share > Add to Home Screen to install it as an app.

## Run Locally

```bash
npm install
npm start
# Open http://localhost:3000
```

## Games

| Game | Status |
|------|--------|
| Princess Starlight & the Rainbow Crystal Quest | Done |
| Bubble Pop Princess | Done |
| Animal Friends Memory Match | Todo |
| Rainbow Fish Catcher | Todo |
| Happy Farm Helper | Todo |
| Animal Hide & Seek | Todo |
| Animal Alphabet Adventure | Todo |
| Raccoon Rescue Bubble Blast | Todo |
| Forest Gem Match (Match-3) | Todo |
| Kitty & Friends Parade | Todo |
| Snowflake Winter Wonderland | Todo |

See [GAMES_ROADMAP.md](GAMES_ROADMAP.md) for detailed specs and build order.

## Tech

- **Phaser 3** for game engine
- **Vanilla HTML/CSS/JS** — no build step
- **GitHub Pages** for hosting
- Game assets from [craftpix.net](https://craftpix.net) and [itch.io](https://itch.io)

## Adding a New Game

1. Create a folder under `games/<game-name>/`
2. Add a self-contained `index.html` with the game
3. Register it in the launcher config
4. Push to main — GitHub Pages auto-deploys
