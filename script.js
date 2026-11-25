const hamburgerBtn = document.getElementById('hamburger-button');
const navLinks = document.getElementById('nav-links');
const primaryNavbar = document.getElementById("primary-navbar")

hamburgerBtn.addEventListener('click', () => {
//   primaryNavbar.style.display = "none";
  const isOpen = navLinks.classList.toggle('active');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
});


