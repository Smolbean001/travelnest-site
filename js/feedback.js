// Validates the form, saves feedback to localStorage, and shows confirmation
function submitFeedback() {
  const name    = document.getElementById('fb-name').value.trim();
  const email   = document.getElementById('fb-email').value.trim();
  const rating  = document.getElementById('fb-rating').value;
  const message = document.getElementById('fb-message').value.trim();
  const msg     = document.getElementById('fb-msg');

  // All fields are required
  if (!name || !email || !rating || !message) {
    msg.textContent = 'Please fill in all fields.';
    msg.style.color = 'red';
    return;
  }

  // Save feedback entry to localStorage
  const list = JSON.parse(localStorage.getItem('feedback') || '[]');
  list.unshift({ name, email, rating, message, date: new Date().toLocaleDateString() });
  localStorage.setItem('feedback', JSON.stringify(list));

  msg.textContent = '✅ Thank you for your feedback!';
  msg.style.color = 'green';

  // Clear the form after submission
  document.getElementById('fb-name').value    = '';
  document.getElementById('fb-email').value   = '';
  document.getElementById('fb-rating').value  = '';
  document.getElementById('fb-message').value = '';

  renderFeedback();
}

// Renders stored feedback entries from localStorage
function renderFeedback() {
  const list = JSON.parse(localStorage.getItem('feedback') || '[]');
  const el   = document.getElementById('feedback-list');
  if (!list.length) { el.innerHTML = '<p>No feedback yet.</p>'; return; }
  el.innerHTML = list.map(f => `
    <div class="saved-trip-item">
      <strong>${f.name}</strong> <span style="color:var(--muted)">${f.date}</span>
      <span>${'⭐'.repeat(f.rating)}</span>
      <p>${f.message}</p>
    </div>
  `).join('');
}

// ── FAQ Accordion ──
const faqs = [
  { q: "How do I save a trip budget?", a: "Fill in the destination, days, and daily budget on the Budget Planner page, then click Save Trip after calculating." },
  { q: "Can I use TravelNest offline?", a: "Yes! TravelNest is a PWA. Once loaded, most features work offline since data is stored in your browser." },
  { q: "How does Destination of the Day work?", a: "It uses today's date to pick a destination from our list — it changes automatically every day." },
  { q: "Is my data stored anywhere?", a: "All your data (saved trips, wishlist, feedback) is stored locally in your browser using localStorage. Nothing is sent to a server." },
  { q: "How do I clear my saved data?", a: "You can clear it by going to your browser settings and clearing site data for this page." }
];

// Builds the FAQ accordion from the faqs array
function renderFAQ() {
  const el = document.getElementById('faq-list');
  el.innerHTML = faqs.map((f, i) => `
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFAQ(${i})" id="faq-btn-${i}">
        ${f.q} <span>+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');
}

// Toggles a FAQ answer open/closed; closes all others first
function toggleFAQ(i) {
  const answer = document.getElementById(`faq-answer-${i}`);
  const btn    = document.getElementById(`faq-btn-${i}`);
  const isOpen = answer.style.maxHeight;

  document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = '');
  document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('open'));

  if (!isOpen) {
    answer.style.maxHeight = answer.scrollHeight + 'px';
    btn.classList.add('open');
  }
}

// Load feedback and FAQ on page load
renderFeedback();
renderFAQ();