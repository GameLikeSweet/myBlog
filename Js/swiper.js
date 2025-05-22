const checkSwiper = () => {
    console.log('checkSwiperis worked')
    const container = document.querySelector('.swiper');
    if (container) {
        new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 4000,
            },
            speed: 400,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 50,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            loopedSlides: 5
        });
    }
    else {
        setTimeout(checkSwiper, 3000); // retry until loaded
    }
};

checkSwiper();