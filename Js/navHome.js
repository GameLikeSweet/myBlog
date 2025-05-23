function navi(menu, url) {
    this.menu = menu;
    this.url = url;
}

let Web = new navi('Web', '/Web.html');
let Alg = new navi('알고리즘', '/Algorithm.html');
let Uni = new navi('Unity', '/Unity.html');
let Git = new navi("Git", '/Git.html');
let Lib = new navi("라이브러리", '/Library.html');
let Tec = new navi('테크노트', '/Tec/techNote.html');
let Pro = new navi('프로필', '/Profile.html');
let Pagi = new navi('작업 페이지', '/Page.html');

var menu_list = [Pro, Tec,  Pagi];

const nav = document.getElementById('nav');

for (let i = 0; i < menu_list.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement('a');
    li.classList.add("tl" + i);
    a.href = menu_list[i].url;
    a.innerText = menu_list[i].menu

    li.appendChild(a);
    nav.appendChild(li);
    //document.write("<li><a href = " + menu_list[i].url + '>'+ menu_list[i].menu + "</a></li>");
}

let tl = gsap.timeline();

for (let i = 0; i < menu_list.length; i++) {
    tl.from(".tl" + i,
        {
            y: -100,
            opacity: 0,
            duration: 1
        }
    )
}
