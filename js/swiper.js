const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.right',
      prevEl: '.left',
    },

    // // If we need pagination
    pagination: {
      el: '.reviews__count',
      type: "fraction",
    },
  });