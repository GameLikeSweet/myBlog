$(function () {
    const $sections = $('#main > section');
    let index = 0;
    let isMoving = false;
    // 새로고침 시 section 위치 보정 (선택적)
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

    // section 이동 (header 높이 보정)
    function moveToSection() {
        let headerHeight = $('header').outerHeight() || 100;
        isMoving = true;
        $('html, body').stop().animate({
            scrollTop: $sections.eq(index).offset().top - headerHeight
        }, 600, function () {
            setTimeout(function () {
                isMoving = false;
            }, 600); // 딜레이 추가
        });
    }

        function moveToBot() {
        let headerHeight = $('header').outerHeight() || 100;
        isMoving = true;

        let footerSize = $('footer').height()
        $('html, body').stop().animate({
            scrollTop: $sections.eq(index -1).offset().top - headerHeight + footerSize
        }, 600, function () {
            setTimeout(function () {
                isMoving = false;
            }, 600); // 딜레이 추가
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
        else if(deltaY > 0 && index >= $sections.length -1 )
        {
            index = $sections.length
            moveToBot();
        }
        else if(deltaY < 0 && index === $sections.length)
        {
            index = $sections.length -1
            moveToSection();
        }
        else if (deltaY < 0 && index > 0) {
            index--;
            moveToSection();
        }
    });

    // 모바일 터치 (원하는 경우만 사용)
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
        } else if (diff < -20 && index > 0) {
            index--;
            moveToSection();
        }
    });
});
