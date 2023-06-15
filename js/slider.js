const slider = document.querySelector(".slider");
const firstImg = document.querySelector(".slider img:first-child");

let isDragStart = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const autoSlide = () => {
  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth;
  let valDifference = firstImgWidth - positionDiff;
  //Right and Left
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

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = slider.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  slider.scrollLeft = e.pageX || e.touches[0].pageX;
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  slider.scrollLeft = prevScrollLeft - positionDiff;
};

const dragEnd = (e) => {
  isDragStart = false;
  autoSlide();
};

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mouseup", dragEnd);
slider.addEventListener("touchstart", dragStart);
slider.addEventListener("touchmove", dragging);
slider.addEventListener("touchend", dragEnd);
