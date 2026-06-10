// ── Ambient Sounds ──
// Each sound loops continuously until stopped
const sounds = {
  beach:  new Audio('sounds/beach.mp3'),
  forest: new Audio('sounds/forest.mp3'),
  rain:   new Audio('sounds/rain.mp3'),
  city:   new Audio('sounds/city.mp3')
};

Object.values(sounds).forEach(s => s.loop = true);

let playing = null; // Tracks which sound is currently playing

// Toggles a sound on/off; stops any other playing sound first
function toggleSound(type) {
  const btns = document.querySelectorAll('.sound-btn');

  if (playing === type) {
    sounds[type].pause();
    playing = null;
    btns.forEach(b => b.classList.remove('active'));
    return;
  }

  if (playing) sounds[playing].pause();
  sounds[type].play();
  playing = type;

  btns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('onclick').includes(type));
  });
}

// ── Destination Tracker ──
// Renders each destination with Visited/Planned toggle buttons
function renderTracker() {
  const saved = JSON.parse(localStorage.getItem('tracker') || '{}');
  const el    = document.getElementById('mood-destinations');
  el.innerHTML = destinations.map(d => {
    const status = saved[d.name] || 'none';
    return `
      <div class="tracker-item">
        <span><strong>${d.name}</strong> — ${d.country}</span>
        <div class="tracker-btns">
          <button class="${status === 'visited' ? 'active' : ''}" onclick="setStatus('${d.name}', 'visited')">✅ Visited</button>
          <button class="${status === 'planned' ? 'active' : ''}" onclick="setStatus('${d.name}', 'planned')">📌 Planned</button>
        </div>
      </div>
    `;
  }).join('');
}

// Updates a destination's status in localStorage; clicking same button clears it
function setStatus(name, status) {
  const saved = JSON.parse(localStorage.getItem('tracker') || '{}');
  saved[name] = saved[name] === status ? 'none' : status;
  localStorage.setItem('tracker', JSON.stringify(saved));
  renderTracker();
}

// Load tracker on page load
renderTracker();