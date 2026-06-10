// Renders destination cards to the grid
function renderCards(list) {
  const grid = document.getElementById('cards-grid');
  if (!list.length) { grid.innerHTML = '<p>No destinations found.</p>'; return; }
  grid.innerHTML = list.map((d, i) => `
    <div class="card" onclick="openModal(${i})"><img src="${d.image}" alt="${d.name}" style="width:100%;height:180px;object-fit:cover;">
      <div class="card-body">
        <h3>${d.name}</h3>
        <p class="card-country">${d.country} · ${d.continent}</p>
        <span class="tag">${d.type}</span>
        <span class="tag">${d.budget}</span>
        <p>${d.desc}</p>
      </div>
    </div>
  `).join('');
}

// Filters destinations based on search text, continent, and type
function filterCards() {
  const search    = document.getElementById('search-input').value.toLowerCase();
  const continent = document.getElementById('continent-filter').value;
  const type      = document.getElementById('type-filter').value;

  const filtered = destinations.filter(d => {
    return (
      (d.name.toLowerCase().includes(search) || d.country.toLowerCase().includes(search)) &&
      (continent === 'all' || d.continent === continent) &&
      (type === 'all' || d.type === type)
    );
  });

  renderCards(filtered);
}

// Opens the modal and populates it with the selected destination's data
function openModal(i) {
  const d = destinations[i];
  document.getElementById('modal-name').textContent = d.name;
  document.getElementById('modal-country').textContent = `${d.country} · ${d.continent}`;
  document.getElementById('modal-desc').textContent = d.desc;
  document.getElementById('modal-attractions').innerHTML = d.attractions.map(a => `<li>${a}</li>`).join('');
  document.getElementById('modal-costs').innerHTML = d.costs.map(c => `<tr><td>${c.item}</td><td>${c.cost}</td></tr>`).join('');
  document.getElementById('modal-overlay').style.display = 'flex';
}

// Close modal on X button click
document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal-overlay').style.display = 'none';
});

// Close modal when clicking outside the modal box
document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target.id === 'modal-overlay') document.getElementById('modal-overlay').style.display = 'none';
});

// Attach filter listeners to search and dropdowns
document.getElementById('search-input').addEventListener('input', filterCards);
document.getElementById('continent-filter').addEventListener('change', filterCards);
document.getElementById('type-filter').addEventListener('change', filterCards);

// Render all cards on page load
renderCards(destinations);