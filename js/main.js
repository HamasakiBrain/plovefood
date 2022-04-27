$(document).ready(function(){
    // $(".gallery").slick({
    //     slidesToShow: 5,
    //     slidesToScroll: 3,
    //     centerMode: true,
    //     variableWidth: true
    // })
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        freeMode: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "@0.75": {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            "@1.00": {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            "@1.50": {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });
      new Rellax('.rellax');
})
