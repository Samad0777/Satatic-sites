// Saare zaruri elements ko pakdo
const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Mobile menu ke saare links ko bhi pakdo
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

// Har ek mobile menu link par event listener lagao
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});



// form section 

const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', () => {
  setTimeout(() => {
    contactForm.reset();
  }, 1000); 
});