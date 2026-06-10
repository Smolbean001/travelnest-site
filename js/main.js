// ── Hamburger Menu ──
// Toggles the mobile nav open/closed when hamburger is clicked
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navbar-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ── Newsletter ──
// Validates email, saves to localStorage, and shows confirmation
function subscribeNewsletter() {
  const input = document.getElementById('newsletter-email');
  const msg = document.getElementById('newsletter-msg');
  const email = input.value.trim();

  if (!email || !email.includes('@')) {
    msg.textContent = 'Please enter a valid email.';
    msg.style.color = 'red';
    return;
  }

  localStorage.setItem('newsletterEmail', email);
  msg.textContent = '🎉 You\'re subscribed!';
  msg.style.color = 'green';
  input.value = '';
}

// ── Quotes Rotator (index only) ──
// Fades between travel quotes every 4 seconds
const quotes = [
  { text: "The world is a book, and those who do not travel read only one page.", author: "— Saint Augustine" },
  { text: "Travel is the only thing you buy that makes you richer.", author: "— Anonymous" },
  { text: "Not all those who wander are lost.", author: "— J.R.R. Tolkien" },
  { text: "Adventure is worthwhile in itself.", author: "— Amelia Earhart" },
  { text: "To travel is to live.", author: "— Hans Christian Andersen" }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

if (quoteText) {
  let i = 0;

  // Shows current quote with fade effect then advances index
  function showQuote() {
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;
    setTimeout(() => {
      quoteText.textContent = `"${quotes[i].text}"`;
      quoteAuthor.textContent = quotes[i].author;
      quoteText.style.opacity = 1;
      quoteAuthor.style.opacity = 1;
      i = (i + 1) % quotes.length;
    }, 400);
  }
  showQuote();
  setInterval(showQuote, 4000);
}

// ── Destination of the Day (index only) ──
// Uses today's date to pick a different destination each day
const dotdName = document.getElementById('dotd-name');

if (dotdName && typeof destinations !== 'undefined') {
  const today = new Date().getDate();
  const pick = destinations[today % destinations.length];
  document.getElementById('dotd-img').src = pick.image;
  document.getElementById('dotd-img').alt = pick.name;
  document.getElementById('dotd-name').textContent = pick.name;
  document.getElementById('dotd-country').textContent = pick.country;
  document.getElementById('dotd-desc').textContent = pick.desc;
}
// ── Scroll Reveal ──
// Adds 'visible' class to .reveal elements when they enter the viewport
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));