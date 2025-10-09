const arrows_prev = document.querySelector(".arrow-prev");
const arrows_next = document.querySelector(".arrow-next");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const pagination = document.querySelector(".pagination");
let SlideNumber = 0;

function updateSlider() {
  slides.style.transform = `translateX(-${curranimation * 100}%)`;

  // dots update કરો
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === curranimation) dot.classList.add("active");
    else dot.classList.remove("active");
  });
}

arrows_next.addEventListener("click", () => {
  SlideNumber++;
  if (SlideNumber > slide.length - 1) {
    SlideNumber = 0;
  }
  slides.style.transform = `translateX(-${SlideNumber * 100}%)`;
  upadates();
});

arrows_prev.addEventListener("click", () => {
  SlideNumber--;
  if (SlideNumber < slide.length - 1) {
    SlideNumber = slide.length - 1;
  }
  slides.style.transform = `translateX(-${SlideNumber * 100}%)`;
  upadates();
});

slide.forEach((s, index) => {
  const paddingDiv = document.createElement("div");
  const dotDiv = document.createElement("div");

  paddingDiv.classList.add("dot-padding");
  dotDiv.classList.add("dot");

  paddingDiv.appendChild(dotDiv);
  pagination.appendChild(paddingDiv);

  return dotDiv;
});
