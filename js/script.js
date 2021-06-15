const welcomeSwiper = new Swiper('.welcome__swiper', {
    loop: true,
    slidesPerView: 1,

    navigation: {
        nextEl: '.swiper-controls__next',
        prevEl: '.swiper-controls__prev',
    },
});

const commentSwiper = new Swiper('.comments__slider', {
    loop: true,
    slidesPerView: 1,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});