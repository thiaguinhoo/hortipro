var scrolling = false;
let step = 400;

const scrollLeft = document.querySelector(".scroll_left");
const scrollRight = document.querySelector(".scroll_right");
const listaHorta = document.querySelector("#horta-produtos");

scrollLeft.addEventListener("click", (event) => {
  event.preventDefault();
  listaHorta.scrollBy({
    left: -step,
    behavior: "smooth",
  });
});

scrollRight.addEventListener("click", (event) => {
  event.preventDefault();
  listaHorta.scrollBy({
    left: step,
    behavior: "smooth",
  });
});
