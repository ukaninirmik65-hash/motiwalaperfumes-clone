const arrows_prev = document.querySelector(".arrow-prev");
const arrows_next = document.querySelector(".arrow-next");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const pagination = document.querySelector(".pagination");


let SlideNumber = 0;

slide.forEach((s, index) => {
  const paddingDiv = document.createElement("div");
  const dotDiv = document.createElement("div");
  paddingDiv.classList.add("dot-padding");
  dotDiv.classList.add("dot");

  if (index === 0) {
    dotDiv.classList.add("active");
  }

  dotDiv.addEventListener("click", () => {
    SlideNumber = index;
    slides.style.transform = `translateX(-${SlideNumber * 100}%)`;
    updatePagination();
  });

  paddingDiv.appendChild(dotDiv);
  pagination.appendChild(paddingDiv);

});
const dots = document.querySelectorAll('.dot')
arrows_next.addEventListener("click", Next);

arrows_prev.addEventListener("click", Back);

function Next() {
  SlideNumber++;
  if (SlideNumber > slide.length - 1) {
    SlideNumber = 0;
  }
  slides.style.transform = `translateX(-${SlideNumber * 100}%)`;
  updatePagination();
}

function Back() {
  SlideNumber--;
  if (SlideNumber < 0) {
    SlideNumber = slide.length - 1;
  }
  slides.style.transform = `translateX(-${SlideNumber * 100}%)`;
  updatePagination();
}

function updatePagination() {
  dots.forEach((dot, indx) => {
    dot.classList.toggle("active", indx === SlideNumber);
  });
}
