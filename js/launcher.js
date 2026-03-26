const GAMES = [
  {
    id: 'princess-platformer',
    title: 'Princess Starlight',
    subtitle: 'Rainbow Crystal Quest',
    description: 'Jump and collect stars across 10 magical levels!',
    emoji: '👸',
    gradient: ['#7b2ff7', '#e91e8c'],
    url: 'platformer.html',
    available: true,
  },
  {
    id: 'memory-match',
    title: 'Animal Memory Match',
    subtitle: 'Find the pairs!',
    description: 'Flip cards to find matching animal friends.',
    emoji: '🐰',
    gradient: ['#11998e', '#38ef7d'],
    url: 'games/memory-match/',
    available: false,
  },
  {
    id: 'fish-catcher',
    title: 'Rainbow Fish Catcher',
    subtitle: 'Cast your line!',
    description: 'Click to catch colorful fish swimming by.',
    emoji: '🎣',
    gradient: ['#1a78c2', '#56ccf2'],
    url: 'games/fish-catcher/',
    available: false,
  },
  {
    id: 'bubble-pop',
    title: 'Bubble Pop Princess',
    subtitle: 'Pop pop pop!',
    description: 'Shoot colorful bubbles and match 3 to pop them!',
    emoji: '🫧',
    gradient: ['#f857a6', '#ff5858'],
    url: 'games/bubble-pop/',
    available: false,
  },
  {
    id: 'farm-helper',
    title: 'Happy Farm Helper',
    subtitle: 'Feed the animals!',
    description: 'Walk around the farm and take care of all the animals.',
    emoji: '🐄',
    gradient: ['#f7971e', '#ffd200'],
    url: 'games/farm-helper/',
    available: false,
  },
  {
    id: 'hide-and-seek',
    title: 'Animal Hide & Seek',
    subtitle: 'Find them all!',
    description: 'Can you spot all the animals hiding in the forest?',
    emoji: '🦊',
    gradient: ['#834d9b', '#d04ed6'],
    url: 'games/hide-and-seek/',
    available: false,
  },
  {
    id: 'alphabet-adventure',
    title: 'Alphabet Adventure',
    subtitle: 'Learn your ABCs!',
    description: 'Match each letter to the right animal friend.',
    emoji: '🔤',
    gradient: ['#00b09b', '#96c93d'],
    url: 'games/alphabet-adventure/',
    available: false,
  },
  {
    id: 'raccoon-rescue',
    title: 'Raccoon Rescue',
    subtitle: 'Bubble Blast!',
    description: 'Free the raccoons trapped inside the bubbles!',
    emoji: '🦝',
    gradient: ['#4568dc', '#b06ab3'],
    url: 'games/raccoon-rescue/',
    available: false,
  },
  {
    id: 'forest-match',
    title: 'Forest Gem Match',
    subtitle: 'Match 3!',
    description: 'Swap sparkling forest gems to make magical matches.',
    emoji: '🌲',
    gradient: ['#1d976c', '#93f9b9'],
    url: 'games/forest-match/',
    available: false,
  },
  {
    id: 'animal-parade',
    title: 'Animal Parade',
    subtitle: 'Tap to the beat!',
    description: 'Tap each animal at just the right moment for their dance!',
    emoji: '🐾',
    gradient: ['#f953c6', '#b91d73'],
    url: 'games/animal-parade/',
    available: false,
  },
  {
    id: 'winter-wonderland',
    title: 'Winter Wonderland',
    subtitle: 'Find the snowflakes!',
    description: 'Explore a cozy snowy forest and collect all the snowflakes.',
    emoji: '❄️',
    gradient: ['#4facfe', '#00f2fe'],
    url: 'games/winter-wonderland/',
    available: false,
  },
];

function createTile(game) {
  const tile = document.createElement('div');
  tile.className = 'tile' + (game.available ? ' tile--available' : ' tile--soon');
  tile.setAttribute('role', 'button');
  tile.setAttribute('tabindex', '0');
  tile.setAttribute('aria-label', game.title);

  tile.innerHTML = `
    <div class="tile__art" style="background: linear-gradient(135deg, ${game.gradient[0]}, ${game.gradient[1]})">
      <span class="tile__emoji">${game.emoji}</span>
      ${!game.available ? '<div class="tile__soon-badge">Coming Soon</div>' : ''}
    </div>
    <div class="tile__info">
      <h2 class="tile__title">${game.title}</h2>
      <p class="tile__subtitle">${game.subtitle}</p>
      <p class="tile__desc">${game.description}</p>
      ${game.available
        ? `<button class="tile__btn">▶ Play!</button>`
        : `<div class="tile__locked">🔒 Coming Soon</div>`
      }
    </div>
  `;

  if (game.available) {
    const launch = () => { window.location.href = game.url; };
    tile.addEventListener('click', launch);
    tile.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') launch(); });
  }

  return tile;
}

function buildLauncher() {
  const grid = document.getElementById('gameGrid');
  GAMES.forEach(game => grid.appendChild(createTile(game)));
}

// Animated background stars
function buildStars() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDelay = Math.random() * 4 + 's';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    container.appendChild(star);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  buildStars();
  buildLauncher();
});
