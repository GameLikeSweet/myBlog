(function(){
    if (window.compareControl && window.compareControl.timerId) {
        clearTimeout(window.compareControl.timerId);
        console.log('compareJS: 기존 changeC 중단');
    }

    window.compareControl = {
        Num: 0,
        i: 0,
        timerId: null,
        stop: function(){
            if (this.timerId) {
                clearTimeout(this.timerId);
                console.log('compareJS: 수동 종료');
            }
            this.timerId = null;
        }
    };

    var color = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

    function changeC() {
        console.log('changeC is Worked');
        if (!document.querySelector('.js1')) {
            console.log('compareJS: 대상 없음 → 실행 취소');
            return;
        }
        let target = document.querySelector(".js" + (window.compareControl.i + 1));
        if (target) {
            target.style.backgroundColor = color[window.compareControl.Num];
        }

        window.compareControl.Num = (window.compareControl.Num + 1) % 7;
        window.compareControl.i = (window.compareControl.i + 1) % 4;

        window.compareControl.timerId = setTimeout(changeC, 1500);
    }

    window.compareControl.timerId = setTimeout(changeC, 1500);

    console.log('compareJS: changeC 시작');
})();
