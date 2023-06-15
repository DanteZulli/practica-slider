// *****************
// SLIDER
// *****************
// Bibliografía:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth
// https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth
// https://www.youtube.com/watch?v=7HPsdVQhpRw

// Variables
const slider = document.querySelector(".slider");
const firstImg = document.querySelector(".slider img:first-child");
let isDragStart = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

// Funciones
const autoSlide = () => {
  positionDiff = Math.abs(positionDiff); // La paso a positivo
  let firstImgWidth = firstImg.clientWidth;
  let valDifference = firstImgWidth - positionDiff;
  // Derecha e Izquierda
  if (slider.scrollLeft > prevScrollLeft) {
    if (positionDiff > firstImgWidth / 3) {
      return (slider.scrollLeft += valDifference);
    } else {
      return (slider.scrollLeft -= positionDiff);
    }
  } else {
    if (positionDiff > firstImgWidth / 3) {
      return (slider.scrollLeft -= valDifference);
    } else {
      return (slider.scrollLeft += positionDiff);
    }
  }
};

// Eventos
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = slider.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault(); // Evita que se seleccione la imagen 
  slider.scrollLeft = e.pageX || e.touches[0].pageX; 
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  slider.scrollLeft = prevScrollLeft - positionDiff; 
};

const dragEnd = (e) => {
  isDragStart = false;
  autoSlide();
};

// Event Listeners
slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mouseup", dragEnd);

slider.addEventListener("touchstart", dragStart);
slider.addEventListener("touchmove", dragging);
slider.addEventListener("touchend", dragEnd);
