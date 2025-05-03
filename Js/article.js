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


function addP(content) {
    if(content == undefined) return;
    else{
        const target = document.querySelectorAll(content.target)[0];
        const p = document.createElement("p");

        p.innerHTML = content.text

        target.append(p);
    }
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