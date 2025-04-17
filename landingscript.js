let imageCarousel = new Swiper('.carousel', {
    direction: 'horizontal',
    loop: true,
    /* spaceBetween: 20, needed if i didn't use gap in wrapper*/
    slidesPerView: 3,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

 let textSwiper = new Swiper('.schedule', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2.5,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 500,
  
    // If we need pagination
    /* pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    }, */
  
    // Navigation arrows
    /* navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, */
  });
