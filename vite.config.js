import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// Discover all HTML entry points (root + games/*)
const gameEntries = readdirSync('games', { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => [`games-${d.name}`, resolve(import.meta.dirname, `games/${d.name}/index.html`)]);

const input = Object.fromEntries([
  ['main', resolve(import.meta.dirname, 'index.html')],
  ['platformer', resolve(import.meta.dirname, 'platformer.html')],
  ...gameEntries,
]);

export default defineConfig({
  base: '/kaylee-game-pack/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: { input },
  },
  server: {
    port: 3000,
    open: true,
  },
});
