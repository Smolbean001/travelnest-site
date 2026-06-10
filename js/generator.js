// Stores the currently generated trip for wishlist saving
let currentTrip = null;

// Randomly picks a destination matching the selected type and budget
function generateTrip() {
  const type   = document.getElementById('type-select').value;
  const budget = document.getElementById('budget-select').value;

  const filtered = destinations.filter(d =>
    (type === 'all' || d.type === type) &&
    (budget === 'all' || d.budget === budget)
  );

  if (!filtered.length) {
    alert('No destinations match your filters. Try different options!');
    return;
  }

  // Pick a random destination from the filtered list
  currentTrip = filtered[Math.floor(Math.random() * filtered.length)];
  document.getElementById('gen-name').textContent = currentTrip.name;
  document.getElementById('gen-country').textContent = `${currentTrip.country} · ${currentTrip.continent}`;
  document.getElementById('gen-desc').textContent = currentTrip.desc;
  document.getElementById('generator-result').style.display = 'block';
}

// Saves the current trip to the wishlist in localStorage
function saveToWishlist() {
  if (!currentTrip) return;
  const list = JSON.parse(localStorage.getItem('wishlist') || '[]');

  // Prevent duplicate entries
  if (list.find(d => d.name === currentTrip.name)) {
    alert('Already in your wishlist!');
    return;
  }
  list.push(currentTrip);
  localStorage.setItem('wishlist', JSON.stringify(list));
  renderWishlist();
}

// Renders the wishlist from localStorage
function renderWishlist() {
  const list = JSON.parse(localStorage.getItem('wishlist') || '[]');
  const el   = document.getElementById('wishlist');
  if (!list.length) { el.innerHTML = '<p>No destinations saved yet.</p>'; return; }
  el.innerHTML = list.map((d, i) => `
    <div class="saved-trip-item">
      <strong>${d.name}</strong> — ${d.country}
      <button onclick="removeWishlist(${i})">🗑️</button>
    </div>
  `).join('');
}

// Removes a wishlist item by index
function removeWishlist(i) {
  const list = JSON.parse(localStorage.getItem('wishlist') || '[]');
  list.splice(i, 1);
  localStorage.setItem('wishlist', JSON.stringify(list));
  renderWishlist();
}

// Load wishlist on page load
renderWishlist();