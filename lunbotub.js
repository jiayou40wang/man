{
    const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImageOpacity();
}
function showpreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImageOpacity();
}
function updateImageOpacity() {
    images.forEach((image, index) => {
        if (index === currentIndex)
     {
            image.style.opacity = 1;
        } else {
            image.style.opacity = 0;
        }
    });
}
setInterval(showNextImage, 3000);
}