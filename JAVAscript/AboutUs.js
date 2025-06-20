let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

const showSlide = (n) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === n);
  });
};

const nextSlide = () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
};

const prevSlide = () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  // Touch swipe detection
  let touchStartX = 0;
  let touchEndX = 0;

  const handleGesture = () => {
    if (touchEndX < touchStartX - 50) nextSlide(); // Swipe left
    if (touchEndX > touchStartX + 50) prevSlide(); // Swipe right
  };

  const container = document.querySelector(".slideshow-container");
  container.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  container.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  });

  showSlide(slideIndex); // Initialize on load
});
