// Swiper.js Initialization
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});


// responsive navbar section 

const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

const mobileMenuLinks = mobileMenu.querySelectorAll('a');

// Function to open the menu
function openMobileMenu() {
  mobileMenu.classList.remove('-translate-x-full');
  mobileMenu.classList.add('translate-x-0');
  openMenuBtn.classList.add('hidden');
  closeMenuBtn.classList.remove('hidden');
}

// Function to close the menu
function closeMobileMenu() {
  mobileMenu.classList.remove('translate-x-0');
  mobileMenu.classList.add('-translate-x-full');
  closeMenuBtn.classList.add('hidden');
  openMenuBtn.classList.remove('hidden');
}

// Event listeners
openMenuBtn.addEventListener('click', openMobileMenu);
closeMenuBtn.addEventListener('click', closeMobileMenu);

// Close the mobile menu when a link is clicked
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});



// form section 

const form = document.querySelector('#contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', function(event) {
  // Assume form is valid initially
  let isValid = true;

  // Clear previous errors
  nameError.textContent = '';
  nameError.classList.add('hidden');
  emailError.textContent = '';
  emailError.classList.add('hidden');
  messageError.textContent = '';
  messageError.classList.add('hidden');

  // --- Validation Checks ---

  // 1. Name Check
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    nameError.classList.remove('hidden');
    isValid = false;
  }

  // 2. Email Check (IMPROVED)
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '') {
    emailError.textContent = 'Please enter your email address.';
    emailError.classList.remove('hidden');
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email format (e.g., name@example.com).';
    emailError.classList.remove('hidden');
    isValid = false;
  }

  // 3. Message Check
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Please enter a message.';
    messageError.classList.remove('hidden');
    isValid = false;
  }


  
  
  // --- Final Decision ---
  
  // Agar form valid nahi hai, to usko submit hone se roko
  if (!isValid) {
    event.preventDefault(); // This stops the form from submitting
  } else {
    // Disable the submit button and change its text to "Sending..."
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
  }
});

// form reset after submission

form.addEventListener('submit', () => {
  setTimeout(() => {
    form.reset();
  }, 1000);
});