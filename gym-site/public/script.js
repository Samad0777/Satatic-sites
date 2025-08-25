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
    delay: 3000,
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
