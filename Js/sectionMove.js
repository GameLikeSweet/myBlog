$(function () {
    const $sections = $('#main > section');
    let index = 0;
    let isMoving = false;
    // 새로고침 시 section 위치 보정 
    function getSectionIndexFromScroll() {
        const scrollTop = $(window).scrollTop();
        let idx = 0;
        $sections.each(function (i, sec) {
            if ($(sec).offset().top - 100 <= scrollTop) {
                idx = i;
            }
        });
        return idx;
    }
    index = getSectionIndexFromScroll();

    function moveToSection() {
        isMoving = true;
        $('html, body').stop().animate({
            scrollTop: $sections.eq(index).offset().top
        }, 600, function () {
            setTimeout(function () {
                isMoving = false;
            }, 600); 
        });
    }

    function moveToBot() {
        isMoving = true;

        let footerSize = $('footer').height()
        $('html, body').stop().animate({
            scrollTop: $sections.eq(index - 1).offset().top + footerSize
        }, 600, function () {
            setTimeout(function () {
                isMoving = false;
            }, 600); 
        });
    }


    // PC 휠 이벤트
    $(window).on('wheel', function (w) {
        if (isMoving) return;
        let deltaY = w.originalEvent.deltaY;

        if (deltaY > 0 && index < $sections.length - 1) {
            index++;
            moveToSection();
        }
        else if (deltaY > 0 && index >= $sections.length - 1) {
            index = $sections.length
            moveToBot();
        }
        else if (deltaY < 0 && index === $sections.length) {
            index = $sections.length - 1
            moveToSection();
        }
        else if (deltaY < 0 && index > 0) {
            index--;
            moveToSection();
        }
    });

    let touchStartY = 0;
    let touchEndY = 0;

    $(window).on('touchstart', function (e) {
        touchStartY = e.originalEvent.touches[0].clientY;
    });

    $(window).on('touchend', function (e) {
        touchEndY = e.originalEvent.changedTouches[0].clientY;
        if (isMoving) return;

        let diff = touchStartY - touchEndY;
        if (diff > 20 && index < $sections.length - 1) {
            index++;
            moveToSection();

        }
        else if (diff > 0 && index >= $sections.length - 1) {
            index = $sections.length
            moveToBot();
        }
        else if (diff < 0 && index === $sections.length) {
            index = $sections.length - 1
            moveToSection();
        }
        else if (diff < -20 && index > 0) {
            index--;
            moveToSection();
        }
    });
});
