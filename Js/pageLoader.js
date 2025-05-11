function loadPage(jsonPath) {
    $.getJSON(jsonPath, function(data) {
      const $main = $('#main');
      $main.empty(); // 기존 내용 초기화
  
      $.each(data, function(_, sectionData) {
        if (sectionData.type === 'section') {
          const $section = $('<section>').addClass(sectionData.title);
          $main.append($section);
  
          $.each(sectionData, function(key, articleData) {
            if (!isNaN(key) && articleData.type === 'article') {
              const $article = $('<article>').addClass(articleData.title);
              $section.append($article);
  
              $.each(articleData, function(i, htmlString) {
                if (!isNaN(i)) {
                  $article.append($(htmlString));
                }
              });
            }
          });
        }
      });
    }).fail(function() {
      console.error('JSON 로드 실패:', jsonPath);
    });
  }