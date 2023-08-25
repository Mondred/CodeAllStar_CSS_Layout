const hamburger = document.getElementById('hamburger-nav');
const navList = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});
