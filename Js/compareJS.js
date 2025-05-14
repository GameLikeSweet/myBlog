var color = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
var Num = 0;
var i = 0;

var isWorking = false;

function changeC() {
    
    let target = document.querySelector(".js" + (i + 1));
    if (target) {
        target.style.backgroundColor = color[Num];
    } else {
        setTimeout(changeC, 1500);
    }
    isWorking = true;
    Num++;
    Num %= 7;
    i++;
    i %= 4;

    // 재귀 호출로 계속 반복
    console.log("changeC is working");
    if (isWorking) setTimeout(changeC, 1500);
}

// 스크립트 로딩 직후 바로 시작 (load에 의존하지 않음)

if (isWorking) {
    Num = 0;
    i = 0;
}
else {
    changeC();
}
