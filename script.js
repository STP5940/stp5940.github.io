const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');

document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('hidden');

        iconMenu.classList.remove('hidden');
        iconClose.classList.add('hidden');
    });
});

// หากคุณมี toggle menu ด้วยปุ่ม
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('open');

    iconMenu.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const swiper = new Swiper('.slideSwiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});