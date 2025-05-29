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
            watchSlidesVisibility: true,
            watchSlidesProgress: true,

            breakpoints: {
                0: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
                801: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                }
            }
        });
    }
    else {
        setTimeout(checkSwiper, 3000); 
    }
};

checkSwiper();
