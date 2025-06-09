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
        let allList = [];

        // 각 그룹(web, git, lib)에서 숫자 key만 배열에 모으기
        ['web', 'git', 'lib'].forEach(function (type) {
            let items = data[type];
            if (!items) return;
            Object.keys(items).forEach(function (key) {
                if (!isNaN(Number(key))) {
                    let obj = items[key];
                    allList.push({
                        idx: Number(key),  // 숫자 key
                        type: type,        // 카테고리(web, git, lib)
                        obj: obj           // 실제 데이터
                    });
                }
            });
        });

        // 한 번에 오름차순 정렬
        allList.sort(function (a, b) {
            return b.idx - a.idx;
        });

        // 순서대로 DOM 추가
        allList.forEach(function (item) {
            let obj = item.obj;
            if (!obj || !obj.title || !obj.url) return;

            let $techBox = $('<div>').addClass(item.type + ' selected');
            let $a = $('<a>').attr('href', obj.url);
            let $inner = $('<div>').addClass('inner');

            let $techImg = $('<div>').addClass('techImg');
            if (obj.img) $techImg.css('background-image', 'url(' + obj.img + ')');
            else $techImg.css('background-image', `url("/resource/noImg.png")`);

            let $techAbout = $('<div>').addClass('techAbout');
            let $title = $('<div>').addClass('techTitle').text(obj.title);
            let $explain = $('<div>').addClass('techExplain').text(obj.explain || "");

            $techAbout.append($title, $explain);
            $inner.append($techImg, $techAbout);
            $a.append($inner);
            $techBox.append($a);

            $('.techBot').append($techBox);
        });
    });
}

function addPageList() {
  $.getJSON('/Json/techNoteList.json', function (data) {
    let pageList = data.page;
    if (!pageList) return;

    // 각 p1, p2, ...에 대해 반복
    Object.values(pageList).forEach(function (p) {
      if (!p || !p.title || !p.url) return;

      let $pageBox = $('<div>').addClass('pageBox'); // 예시: 클래스명 수정
      let $a = $('<a>').attr('href', p.url);
      let $inner = $('<div>').addClass('inner');

      let $pageImg = $('<div>').addClass('pageImg');
      if (p.img) $pageImg.css('background-image', 'url(' + p.img + ')');
      else $pageImg.css('background-image', 'url(/resource/noImg.png)');

      let $pageAbout = $('<div>').addClass('pageAbout');
      let $title = $('<div>').addClass('pageTitle').text(p.title);
      let $explain = $('<div>').addClass('pageExplain').text(p.explain || '');

      $pageAbout.append($title, $explain);
      $inner.append($pageImg, $pageAbout);
      $a.append($inner);
      $pageBox.append($a);

      $('.pageBot').append($pageBox);
    });
  });
}
