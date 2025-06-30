const swiper = new Swiper('.swiper', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 10,
  effect: 'coverflow',
  centeredSlides:true,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    scale: 0.9, // 좌우 슬라이드 크기를 90%로 조정
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
