const left = document.querySelector(".left");
const right = document.querySelector(".right");
const list = document.querySelector(".side__list");

const listPX = list.clientWidth; // 슬라이드 리스트의 전체 길이
const sidePX = document.querySelector(".side").clientWidth; // 슬라이드 요소 하나의 width : 이런 값은 console.dir로 찾을 수 있음

let PX = 0;

function clickedLeft() {
    console.log("left");
    PX -= sidePX;
    if (PX < 0) {
        PX = listPX - sidePX;
    }
    list.style.right = `${PX}px`;
}

function clickedRight() {
    console.log("right");
    PX += sidePX;
    if (PX > listPX - sidePX) {
        PX = 0;
    }
    list.style.right = `${PX}px`;
}

left.addEventListener("click", clickedLeft);
right.addEventListener("click", clickedRight);
