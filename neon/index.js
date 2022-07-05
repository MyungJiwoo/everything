const screen = document.querySelector(".screen");
const dial = document.querySelectorAll(".btn");

for (let i = 0; i < dial.length; i++) {
    dial[i].addEventListener("click", () => {
        // console.dir(dial[i]);
        // console.log(dial[i].id);
        // console.log(typeof dial[i].id);
        screen.innerHTML += dial[i].id;

        if (screen.innerText.length > 4) {
            screen.innerText = "";
            dial.forEach((checkbox) => {
                checkbox.checked = false;
            });
        }
    });
}
