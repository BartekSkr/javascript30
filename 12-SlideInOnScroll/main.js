const slidingImages = document.querySelectorAll(".slide-in");

// Function causes delays and no pictures are showing with fats scrolling
// function debounce(func, wait = 20, imediate = true) {
//   let timeout;
//   return function () {
//     let context = this,
//       args = arguments;
//     let later = function () {
//       timeout = null;
//       if (!imediate) {
//         func.apply(context, args);
//       }
//     };
//     let callNow = imediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) {
//       func.apply(context, args);
//     }
//   };
// }

function checkSlide() {
  slidingImages.forEach((sliderImage) => {
    // half way through the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

// window.addEventListener("scroll", debounce(checkSlide));
window.addEventListener("scroll", checkSlide);
