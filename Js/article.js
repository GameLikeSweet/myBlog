function mkArticle (content) {
    const article = document.createElement("article");

    if(content == undefined || content.target == undefined) {
        //article.innerText = "article";
        article.classList.add('article');
    }
    else {
        //article.innerText = content.title;
        article.classList.add(content.title);
    }
    

    document.querySelector(content.target).append(article);
}


function addDiv(content) {
    if (content == undefined) return;

    if (typeof content === "string") {
        console.log("addDiv: " + content + " is working");
        fetch(content)
            .then(res => res.json())
            .then(data => addDiv(data))
            .catch(err => console.error("JSON 로딩 실패:", err));
        return;
    }
    else if (typeof content === "object" && !Array.isArray(content)) {
        const keys = Object.keys(content);
        const isMulti = keys.every(k => !isNaN(k)); // 숫자 key만 있으면 반복

        if (isMulti) {
            keys.forEach(key => {
                addDiv(content[key]);
            });
            return;
        }
    }

    const target = document.querySelector(content.target);
    if (!target) {
        console.warn("대상 요소를 찾을 수 없습니다:", content.target);
        return;
    }


    const div = document.createElement("div");
    div.classList.add(content.title);
    div.innerHTML = content.text;

    target.appendChild(div);
}


function addImg(content) {
    if(content == undefined) return;
    else{
        const target = document.querySelectorAll(content.target)[0];
        const i = document.createElement("img");

        i.src = content.text;

        target.append(i);
    }
}