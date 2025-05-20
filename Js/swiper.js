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
            }
        });
    }
    else {
        setTimeout(checkSwiper, 3000); // retry until loaded
    }
};

checkSwiper();