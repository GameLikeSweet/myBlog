function loadPage(jsonPath) {
    $.getJSON(jsonPath, function (data) {
        const $main = $('#main');
        $main.empty();

        // CSS 동적 추가 (중복 방지)
        if (data.css) {
            if (!$('link[href="' + data.css + '"]').length) {
                $('head').append('<link rel="stylesheet" type="text/css" href="' + data.css + '">');
            }
        }

        // 콘텐츠 생성
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

        // JS 스크립트 추가 (중립적, 단순 추가만 하고 실행 제어는 안 함)
        if (Array.isArray(data.js)) {
            data.js.forEach(function (src) {
                if (typeof src === 'string' && !$('script[src="' + src + '"]').length) {
                    const script = document.createElement('script');
                    script.src = src;
                    document.body.appendChild(script);
                    console.log('동적 JS 추가:', src);
                }
            });
        }

    }).fail(function () {
        console.error('JSON 로드 실패:', jsonPath);
    });
}
