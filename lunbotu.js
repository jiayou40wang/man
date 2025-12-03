{
    document.addEventListener("DOMContentLoaded", function () {
        const carousel = document.querySelector(".carousel");
        const items = carousel.querySelectorAll(".carousel-item");
        const indicators = carousel.querySelectorAll(".carousel-indicators li");
        const thumbnails = carousel.querySelectorAll(".carousel-thumbnails img");

        let currentIndex = 0;

        function slideTo(index) {
          items.forEach(item => item.classList.remove("active"));
          indicators.forEach(indicator => indicator.classList.remove("active"));
          items[index].classList.add("active");
          indicators[index].classList.add("active");
          currentIndex = index;
        }

        function changeSlide(shift) {
          let newIndex = currentIndex + shift;
          if (newIndex >= items.length) newIndex = 0;
          if (newIndex < 0) newIndex = items.length - 1;
          slideTo(newIndex);
        }

        indicators.forEach((indicator, index) => {
          indicator.addEventListener("click", () => {
            slideTo(index);
          });
        });

        thumbnails.forEach((thumbnail, index) => {
          thumbnail.addEventListener("click", () => {
            slideTo(index);
          });
        });

        let intervalId;
        function autoPlay() {
          intervalId = setInterval(() => {
            changeSlide(1);
          }, 5000);
        }

        autoPlay();

        carousel.addEventListener("mouseenter", () => {
          clearInterval(intervalId);
        });

        carousel.addEventListener("mouseleave", () => {
          autoPlay();
        });
      });
}
