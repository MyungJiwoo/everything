// 예시 api
const api = `[{"itemImage":"https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/147427572144400039","itemName":"신일비사코딜정","how":"Meal","many":2,"when":"Morn","startDate":"2021-09-18","lastDate":"2021-10-18"},{"itemImage":"blank","itemName":"활명수","how":"afterMeal","many":1,"when":"Even","startDate":"2021-08-18","lastDate":"2021-10-18"}]`;
// string type으로 넘어온 api 정보를 object type으로 변환
const apiObj = JSON.parse(api);
// 기준 날짜 설정
const today = new Date("2021-10-15");

// Date() 객체 'yyyy-mm-dd' 형식으로 변환해주는 함수
function transFormat(medicine_date) {
    const year = medicine_date.getFullYear();
    const month = medicine_date.getMonth() + 1;
    const date = medicine_date.getDate();
    const medicine = `${year}-${month >= 10 ? month : "0" + month}-${date >= 10 ? date : "0" + date}`;

    return medicine;
}

// api 정보 시각화
function viewAPI() {
    console.log("--- api 내 정보 ---");
    for (let i = 0; i < apiObj.length; i++) {
        let medicine_startDate = new Date(apiObj[i].startDate);
        medicine_startDate = transFormat(medicine_startDate);
        let medicine_lastDate = new Date(apiObj[i].lastDate);
        medicine_lastDate = transFormat(medicine_lastDate);
        console.log(`${i + 1}. ${apiObj[i].itemName} : ${medicine_startDate}부터 ${medicine_lastDate}까지 복용`);
    }
    console.log("-------------------");
}

function viewDailyMedieger(DailyMedigerList) {
    console.log(DailyMedigerList);
    console.log(`== ${transFormat(today)} ==`);
    // 약 리스트
    for (let i = 0; i < DailyMedigerList.length; i++) {
        console.log(`${i + 1}. ${DailyMedigerList[i].itemName}`);
    }
}

// ✅ 오늘 날짜에 섭취해야 하는지 확인 (데일리 메디저 리스트에 추가)
// ⭐ 8/18일부터 복용이면 8/19부터 리스트에 추가 됨 : if문에서 이상 이하로 수정
function checkDate() {
    // 기준 날짜에 먹어야 할 약 리스트
    const DailyMedigerList = [];
    for (let i = 0; i < apiObj.length; i++) {
        const startDate = new Date(apiObj[i].startDate);
        const lastDate = new Date(apiObj[i].lastDate);
        if (startDate <= today && lastDate >= today) {
            DailyMedigerList.push(apiObj[i]);
        }
    }
    viewDailyMedieger(DailyMedigerList);
}

// 실행 함수
function start() {
    viewAPI();
    checkDate();
}

start();
