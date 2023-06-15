const slider = document.querySelector('.slider');

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    slider.scrollLeft = e.pageX || e.touches[0].pageX;
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragEnd = (e) => {
    isDragStart = false;
}

slider.addEventListener('mousedown', dragStart);
slider.addEventListener('mousemove', dragging);
slider.addEventListener('mouseup', dragEnd);
slider.addEventListener('touchstart', dragStart);
slider.addEventListener('touchmove', dragging);
slider.addEventListener('touchend', dragEnd);