function loadPage(jsonPath) {
    $.getJSON(jsonPath, function (data) {
        const $main = $('#main');
        $main.empty();

        // css 속성이 있다면 동적으로 추가
        if (data.css) {
            if (!$('link[href="' + data.css + '"]').length) { // 중복 방지
                $('head').append('<link rel="stylesheet" type="text/css" href="' + data.css + '">');
            }
        }

        $.each(data, function (key, sectionData) {
            if (!isNaN(key)) {
                if (sectionData.type === 'section') {
                    const $section = $('<section>').addClass(sectionData.title);
                    $main.append($section);

                    $.each(sectionData, function (subKey, articleData) {
                        if (!isNaN(subKey)) {
                            if (articleData.type === 'article') {
                                const $article = $('<article>').addClass(articleData.title);
                                $section.append($article);

                                $.each(articleData, function (i, htmlString) {
                                    if (!isNaN(i)) {
                                        $article.append($(htmlString));
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    }).fail(function () {
        console.error('JSON 로드 실패:', jsonPath);
    });
}
