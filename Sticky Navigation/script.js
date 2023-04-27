const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
    nav.style.opacity = 0.7;
  } else {
    nav.classList.remove('active');
    nav.style.opacity = 1;
  }
}
