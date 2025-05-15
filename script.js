// --- Event Handling ---

const button = document.getElementById('eventButton');
const buttonMessage = document.getElementById('buttonMessage');

// Button click
button.addEventListener('click', () => {
  buttonMessage.textContent = 'Button clicked! 🎉';
  button.style.backgroundColor = 'green';
});

// Bonus: Double-click
button.addEventListener('dblclick', () => {
  buttonMessage.textContent = 'Double-clicked! 🧠 Secret unlocked.';
  button.style.backgroundColor = 'purple';
});

// Bonus: Long press (hold for 1.5s)
let pressTimer;
button.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    buttonMessage.textContent = 'Long press detected 🔒';
  }, 1500);
});
button.addEventListener('mouseup', () => clearTimeout(pressTimer));

// Hover effects
const hoverBox = document.getElementById('hoverBox');
const hoverMessage = document.getElementById('hoverMessage');

hoverBox.addEventListener('mouseover', () => {
  hoverMessage.textContent = 'You hovered! 🎈';
});
hoverBox.addEventListener('mouseout', () => {
  hoverMessage.textContent = '';
});

// Keypress detection
const keyInput = document.getElementById('keyInput');
const keyMessage = document.getElementById('keyMessage');

keyInput.addEventListener('keyup', (e) => {
  keyMessage.textContent = `You typed: "${e.key}"`;
});

// --- Interactive Elements ---

// Slideshow
const galleryImage = document.getElementById('galleryImage');
const nextButton = document.getElementById('nextImage');
const images = [
  'https://via.placeholder.com/300x200?text=Image+1',
  'https://via.placeholder.com/300x200?text=Image+2',
  'https://via.placeholder.com/300x200?text=Image+3'
];
let index = 0;

nextButton.addEventListener('click', () => {
  index = (index + 1) % images.length;
  galleryImage.src = images[index];
});

// Accordion toggle
const accordionToggle = document.querySelector('.accordion-toggle');
const accordionContent = document.querySelector('.accordion-content');

accordionToggle.addEventListener('click', () => {
  accordionContent.style.display =
    accordionContent.style.display === 'block' ? 'none' : 'block';
});

// --- Form Validation ---

const form = document.getElementById('myForm');
const feedback = document.getElementById('formFeedback');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = passwordInput.value;

  if (!name || !email || !password) {
    feedback.textContent = '❌ All fields are required.';
    feedback.style.color = 'red';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    feedback.textContent = '❌ Invalid email format.';
    feedback.style.color = 'red';
    return;
  }

  if (password.length < 8) {
    feedback.textContent = '❌ Password must be at least 8 characters.';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = '✅ Form submitted successfully!';
  feedback.style.color = 'green';
});

// Bonus: Real-time password strength feedback
passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    feedback.textContent = '🟡 Weak password';
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = '🟢 Strong password';
    feedback.style.color = 'green';
  }
});
