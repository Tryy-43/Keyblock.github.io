const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-nextt",
    prevEl: ".swiper-button-prevv",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
const swiperPromotion = new Swiper(".slider-wrapper-promotion", {
  loop: true,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-promotion",
    prevEl: ".swiper-button-prev-promotion",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
const swiperCustomer = new Swiper(".slider-wrapper-customer", {
  loop: true,
  grabCursor: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next-promotion",
  //   prevEl: ".swiper-button-prev-promotion",
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
const heroSection = new Swiper(".hero-section", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    dynamicBullets: true,
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-slider",
    prevEl: ".swiper-button-prev-slider",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
const swiperReview = new Swiper(".swiper-review", {
  // Optional parameters
  grabCursor: true,
  loop: true,
});

const customerSection = new Swiper(".customer-section", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    dynamicBullets: true,
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-review",
    prevEl: ".swiper-button-prev-review",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
