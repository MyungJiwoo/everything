const left = document.querySelector(".left");
const right = document.querySelector(".right");
const modallist = document.querySelector(".modal");

let num = 300;

function clickedLeft(num) {
    console.log(num);
    // modallist.style.left = `${leftValue}px`;
}

function clickedRight() {
    // alert("right");
    console.log(num + "R");
    modallist.style.right = "300px";
}

left.addEventListener("click", clickedLeft(num));
right.addEventListener("click", clickedRight());
