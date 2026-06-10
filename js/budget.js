// Tracks the last calculated input combo to prevent duplicate submissions
let lastCalculated = null;

const destInput   = document.getElementById('dest-input');
const daysInput   = document.getElementById('days-input');
const budgetInput = document.getElementById('budget-input');
const calcBtn     = document.querySelector('button[onclick="calculateBudget()"]');

// Re-enables the Calculate button whenever any input changes
[destInput, daysInput, budgetInput].forEach(input => {
  input.addEventListener('input', () => {
    calcBtn.disabled = false;
    calcBtn.textContent = 'Calculate';
  });
});

// Calculates total trip cost and displays result with progress bar
function calculateBudget() {
  const dest  = destInput.value.trim();
  const days  = parseInt(daysInput.value);
  const daily = parseFloat(budgetInput.value);

  if (!dest || !days || !daily) {
    alert('Please fill in all fields.');
    return;
  }

  // Prevent recalculating the same values
  const key = `${dest}-${days}-${daily}`;
  if (key === lastCalculated) {
    calcBtn.disabled = true;
    calcBtn.textContent = 'Already Calculated';
    return;
  }
  lastCalculated = key;

  const total = days * daily;

  document.getElementById('result-title').textContent = `Trip to ${dest}`;
  document.getElementById('result-total').textContent = `Total: $${total.toFixed(2)} for ${days} days`;

  // Determine budget status based on daily spend
  const status = daily < 50 ? 'Budget' : daily < 150 ? 'Moderate' : 'Luxury';
  const statusEl = document.getElementById('budget-status');
  statusEl.textContent = status;
  statusEl.className = `budget-status ${status.toLowerCase()}`;

  // Progress bar width reflects daily budget relative to $200 max
  const pct = Math.min((daily / 200) * 100, 100);
  document.getElementById('progress-bar').style.width = pct + '%';

  document.getElementById('budget-result').style.display = 'block';

  calcBtn.disabled = true;
  calcBtn.textContent = 'Already Calculated';
}

// Saves current trip to localStorage and refreshes the saved list
function saveTrip() {
  const dest  = destInput.value.trim();
  const days  = daysInput.value;
  const daily = budgetInput.value;
  if (!dest) return;

  const trips = JSON.parse(localStorage.getItem('savedTrips') || '[]');
  trips.push({ dest, days, daily, total: (days * daily).toFixed(2) });
  localStorage.setItem('savedTrips', JSON.stringify(trips));
  renderSavedTrips();
}

// Renders all saved trips from localStorage
function renderSavedTrips() {
  const trips = JSON.parse(localStorage.getItem('savedTrips') || '[]');
  const container = document.getElementById('saved-trips');
  if (!trips.length) { container.innerHTML = '<p>No saved trips yet.</p>'; return; }
  container.innerHTML = trips.map((t, i) => `
    <div class="saved-trip-item">
      <strong>${t.dest}</strong> — ${t.days} days @ $${t.daily}/day = <strong>$${t.total}</strong>
      <button onclick="deleteTrip(${i})">🗑️</button>
    </div>
  `).join('');
}

// Deletes a trip by index and re-renders the list
function deleteTrip(i) {
  const trips = JSON.parse(localStorage.getItem('savedTrips') || '[]');
  trips.splice(i, 1);
  localStorage.setItem('savedTrips', JSON.stringify(trips));
  renderSavedTrips();
}

// Load saved trips on page load
renderSavedTrips();