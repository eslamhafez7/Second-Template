document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('#testimonials', {
        slidesPerView: 1,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
        }
    });
});

var menuToggle = document.querySelector('.menu');
var navList = document.querySelector('.nav-list');
menuToggle.addEventListener('click', function() {
    navList.classList.toggle('show');
});

document.addEventListener('click', function(event) {
        var targetElement = event.target;
        if (!targetElement.closest('.custom-navbar')) {
        navList.classList.remove('show');
    }
});