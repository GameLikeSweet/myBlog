function toggleWeb() {
    $('.web').toggleClass('selected');
}

function toggleGit() {
    $('.git').toggleClass('selected');
}

function toggleLib() {
    $('.lib').toggleClass('selected');
}


function addTechNote() {
    $.getJSON('/Json/techNoteList.json', function (data) {
        $.each(data, function (key, items) {
            if (key === 'web' || key === 'git' || key === 'lib') {
                makingTechNote(items, key);
            }
            // page 등 기타는 무시(추가하지 않음)
        });
    });
}

function makingTechNote(items, key) {
    // 숫자 키만 오름차순 정렬
    let keys = Object.keys(items)
        .filter(numKey => !isNaN(Number(numKey))) // 숫자 키만
        .sort((a, b) => Number(a) - Number(b));   // 오름차순

    $.each(keys, function (idx, numKey) {
        let obj = items[numKey];
        if (!obj || !obj.title || !obj.url) return;

        let $techBox = $('<div>').addClass(key + ' selected');
        let $a = $('<a>').attr('href', obj.url);
        let $inner = $('<div>').addClass('inner');

        let $techImg = $('<div>').addClass('techImg');
        if (obj.img) $techImg.css('background-image', 'url(' + obj.img + ')');

        let $techAbout = $('<div>').addClass('techAbout');
        let $title = $('<div>').addClass('techTitle').text(obj.title);
        let $explain = $('<div>').addClass('techExplain').text(obj.explain || "isEmpty");

        $techAbout.append($title, $explain);
        $inner.append($techImg, $techAbout);
        $a.append($inner);
        $techBox.append($a);

        $('.techBot').append($techBox);
    });
}
