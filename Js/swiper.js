const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true, 
    slidesPerView: 1.5,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 1000,
    },
  });
  