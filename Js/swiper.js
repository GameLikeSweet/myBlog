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
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 30,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            loopedSlides: 5,

            breakpoints: {
                0: {
                    slidesPerView: 1.3,
                    spaceBetween: 8,
                },
                801: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            }
        });
    }
    else {
        setTimeout(checkSwiper, 3000); 
    }
};

checkSwiper();
