const flip = document.querySelectorAll(".flip");

for (let i = 0; i < flip.length; i++) {
    flip.item(0).addEventListener("mouseover", () => {
        flip.item(i).classList.add("flipped");
    });

    flip.item(i).addEventListener("click", () => {
        if (flip.item(i).classList.contains("more")) {
            flip.item(i).classList.remove("more");
        } else {
            for (let j = 0; j < flip.length; j++) {
                flip.item(j).classList.remove("more");
            }
            flip.item(i).classList.add("more");
        }
    });
}
