// Initialize the qualitative-results carousel and small UX helpers.
document.addEventListener('DOMContentLoaded', function () {
  // bulma-carousel
  if (window.bulmaCarousel) {
    bulmaCarousel.attach('#results-carousel', {
      slidesToScroll: 1,
      slidesToShow: 2,
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      breakpoints: [{ changePoint: 640, slidesToShow: 1, slidesToScroll: 1 }],
    });
  }

  // bulma-slider (if any range sliders are added later)
  if (window.bulmaSlider) {
    bulmaSlider.attach();
  }
});
