const arrows_prev = document.querySelector(".arrow-prev");
const arrows_next = document.querySelector(".arrow-next");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const pagination = document.querySelector(".pagination");

let SlideNumber = 0;


arrows_next.addEventListener("click", () => {
  SlideNumber++;
  if (SlideNumber > slide.length - 1) {
    SlideNumber = 0;
  }
  slides.style.transform = `translateX(-${SlideNumber * 100}%)`;
 updatePagination()
});

arrows_prev.addEventListener("click", () => {
  SlideNumber--;
  if (SlideNumber < slide.length - 1) {
    SlideNumber = slide.length - 1;
  }
  slides.style.transform = `translateX(-${SlideNumber * 100}%)`;
 updatePagination()
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

function updatePagination() {
  const dots = document.querySelectorAll(".dot");
  console.log(dots)
}
