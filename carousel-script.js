document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
      loop: true,
  
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
  
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
      slidesPerView: 1, // Adjust this based on your layout
      spaceBetween: 20, // Add spacing between slides
    });
  });