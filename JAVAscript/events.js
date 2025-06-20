document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container-card");
    const cards = container.querySelectorAll(".card");
    let currentIndex = 0;

    const prevBtn = document.createElement("button");
    prevBtn.innerText = "❮";
    prevBtn.classList.add("slide-btn", "slide-prev");

    const nextBtn = document.createElement("button");
    nextBtn.innerText = "❯";
    nextBtn.classList.add("slide-btn", "slide-next");

    container.parentElement.style.position = "relative";
    container.parentElement.appendChild(prevBtn);
    container.parentElement.appendChild(nextBtn);

    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? "block" : "none";
        });
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });

    showCard(currentIndex);

    // Touch support
    let startX = 0;

    container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    container.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        let deltaX = endX - startX;

        if (deltaX > 50) {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            showCard(currentIndex);
        } else if (deltaX < -50) {
            currentIndex = (currentIndex + 1) % cards.length;
            showCard(currentIndex);
        }
    });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close-lightbox");

document.querySelectorAll(".lightbox-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    lightboxImg.src = link.href;
    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxImg.src = "";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  }
});
