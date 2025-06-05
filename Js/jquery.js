
// JS 와 jQuery의 선택자 비교
const jQuery = $('.jqeuryBox')
const JS = document.querySelectorAll('.jsBox');


// JS 와 jQuery로 선택한 대상에 클릭을 통한 함수 호출 추가 비교
jQuery.on('click', textChangejQuery);
JS.addEventLisner(onclick, textChangeJs)



// 선택한 엘리먼트에 텍스트 추가 함수
function textChangeJS() {
    JS.forEach(el => el.innerText = "Js is work");
}
function textChangejQuery() {
    jQuery.text("jQuery is work");
}

