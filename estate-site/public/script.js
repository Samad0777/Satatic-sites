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


mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});


// form section 


const form = document.getElementById('contact-form');

if (form) {
  const submitButton = form.querySelector('button[type="submit"]');
  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const messageInput = form.querySelector('#message');

  const nameError = form.querySelector('#name-error');
  const emailError = form.querySelector('#email-error');
  const messageError = form.querySelector('#message-error');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
    messageError.classList.add('hidden');

   
    let isValid = true;
    
    // Name check
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name.';
        nameError.classList.remove('hidden');
        isValid = false;
    }

    // Email check
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        emailError.textContent = 'Please enter your email address.';
        emailError.classList.remove('hidden');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email format.';
        emailError.classList.remove('hidden');
        isValid = false;
    }

    // Message check
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter a message.';
        messageError.classList.remove('hidden');
        isValid = false;
    }

    
    if (!isValid) {
      event.preventDefault(); 
    } else {
      
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      
      setTimeout(() => {
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
      }, 2000);
    }
  });
}

// End of form section