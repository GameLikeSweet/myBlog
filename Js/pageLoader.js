function loadPage(jsonPath) {
    $.getJSON(jsonPath, function (data) {
        const $main = $('#main');
        $main.empty();
        $("link[loadBy='pageLoader']").remove();
        $("script[loadBy='pageLoader']").remove();


        if (data.css) {
            if (!$('link[href="' + data.css + '"]').length) {
                $('head').append('<link rel="stylesheet" type="text/css" href="' + data.css + '" loadBy="pageLoader">');
            }
        }

        $.each(data, function (key, sectionData) {
            if (!isNaN(key)) {
                if (sectionData.type === 'section') {
                    const $section = $('<section>').addClass(sectionData.title);
                    $main.append($section);

                    $.each(sectionData, function (subKey, blockData) {
                        if (!isNaN(subKey)) {
                            if (blockData.type) {
                                const $element = $('<' + blockData.type + '>').addClass(blockData.title);
                                $section.append($element);

                                let combinedHTML = "";
                                $.each(blockData, function (i, htmlString) {
                                    if (!isNaN(i)) {
                                        combinedHTML += htmlString;
                                    }
                                });

                                $element.append($(combinedHTML));
                            }
                        }
                    });
                }
            }
        });

        if (Array.isArray(data.js)) {
            data.js.forEach(function (src) {
                if (typeof src === 'string' && !$('script[src="' + src + '"]').length) {
                    const script = document.createElement('script');
                    script.setAttribute('loadBy', "pageLoader");
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
