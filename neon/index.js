const screen = document.querySelector(".screen");
const dial = document.querySelectorAll(".btn");

let answer = [];
let question = [];
question.length = 4;

// 문제 설정
function readyForQuestion() {
    for (let i = 0; i < question.length; i++) {
        let num = Math.floor(Math.random() * 10);
        question[i] = num;
    }
    console.log(question);
}

function readyForAnswer(num) {
    answer.push(Number(num));
    checkLength();

    screen.innerHTML = answer;
}

function checkLength() {
    if (answer.length > 4) {
        answer = [];
        screen.innerText = "";
        dial.forEach((checkbox) => {
            checkbox.checked = false;
        });
    }
}

function grading() {
    console.log("-------정답은?------");
    console.log(answer);
    console.log(question);
    if (JSON.stringify(answer) === JSON.stringify(question)) {
        screen.classList.remove("wrong");
        screen.classList.add("collect");
    } else {
        screen.classList.add("wrong");
    }
}

for (let i = 0; i < dial.length; i++) {
    dial[i].addEventListener("click", () => {
        if (dial[i].id > -1) {
            let num = dial[i].id;
            readyForAnswer(num);
            // screen.innerHTML += dial[i].id;
        }

        if (dial[i].id == "backspace") {
            answer.pop();
            screen.innerHTML = answer;
        }

        if (dial[i].id == "check") {
            grading();
        }
    });
}

readyForQuestion();

// 1. 랜덤으로 4자리를 만든다
// 2. 사용자는 4자리 숫자를 체크박스로 입력한다
// 2-1. 사용자가 하나의 숫자를 입력할 때마다 그 숫자가 맞는지 확인해서 색을 표현
// 2-2. 백스페이스 가능
// 2-3. 입력이 4자리가 넘어가면 자동 초기화
// 3. 4자리를 입력 후 정답 버튼을 누르면 정답인지 알려줌

// 보완할 점
// 1. 하나 누를 때마다 숫자 비교
// 2. 정답 / 오답 css
// 3. 버튼 누를때만 잠깐 반짝이기
