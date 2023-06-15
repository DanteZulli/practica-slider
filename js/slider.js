const slider = document.querySelector('.slider');

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    slider.scrollLeft = e.pageX;
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragEnd = (e) => {
    isDragStart = false;
}

slider.addEventListener('mousedown', dragStart);
slider.addEventListener('mousemove', dragging);
slider.addEventListener('mouseup', dragEnd);