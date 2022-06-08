const left = document.querySelector(".left");
const right = document.querySelector(".right");
const modallist = document.querySelector(".modal");

let PX = 300;

function clickedLeft() {
    PX -= 300;
    modallist.style.right = `${PX}px`;
}

function clickedRight() {
    PX += 300;
    modallist.style.right = `${PX}px`;
}

left.addEventListener("click", clickedLeft);
right.addEventListener("click", clickedRight);
