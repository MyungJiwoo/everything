// const mediger = "Even";
// console.log(typeof mediger);

const api = {
    when: "After",
};

let Morn = "Morn"; // 새로운 키 변수 선언
let After = "After"; // 새로운 키 변수 선언
let Even = "Even"; // 새로운 키 변수 선언

// step 1. 객체와 변수값 함께 만들기
// let obj2 = { [Mron]: "아침", [After]: "점심", [Even]: "저녁" }; // 훨씬 더 간략하게 키와 값이 할당되었다.
let time = { [Morn]: "아침", [After]: "점심", [Even]: "저녁" };

const mediger = api.when;
// console.log(typeof mediger);

console.log(time[mediger]);
// console.log(obj2[key1]);
