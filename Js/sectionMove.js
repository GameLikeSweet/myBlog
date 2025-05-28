$(function () {
    const $sections = $('section');
    let index = 0;
    let isMoving = false;

    moveToSection();
    // PC: 휠 이벤트
    $(window).on('wheel', function (w) {
        if (isMoving) return;

        let deltaY = w.originalEvent.deltaY;

        if (deltaY > 0 && index < $sections.length - 1) {
            index++;
        }
        else if (deltaY < 0 && index > 0) {
            index--;
        } else {
            return;
        }

        moveToSection();
    });

    // 모바일: 터치 이벤트
    let touchStartY = 0;
    let touchEndY = 0;

    $(window).on('touchstart', function(e) {
        touchStartY = e.originalEvent.touches[0].clientY;
    });

    $(window).on('touchend', function(e) {
        touchEndY = e.originalEvent.changedTouches[0].clientY;
        if (isMoving) return;

        let diff = touchStartY - touchEndY;

        if (diff > 20 && index < $sections.length - 1) {
            index++;
            moveToSection();
        } else if (diff < -20 && index > 0) {
            index--;
            moveToSection();
        }
    });

    function moveToSection() {
        isMoving = true;
        $('html, body').stop().animate({
            scrollTop: $sections.eq(index).offset().top
        }, 600, function () {
            isMoving = false;
        });
    }
});
