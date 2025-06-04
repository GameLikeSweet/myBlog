function navi(menu, url) {
    this.menu = menu;
    this.url = url;
}

let Web = new navi('Web', '/Web.html');
let Alg = new navi('알고리즘', '/Algorithm.html');
let Uni = new navi('Unity', '/Unity.html');
let Git = new navi("Git", '/Git.html');
let Lib = new navi("라이브러리", '/Library.html');
let Tec = new navi('TechNote', '/Tec/techNote.html');
let Pro = new navi('Profile', '/Profile.html');
let Pagi = new navi('Work Page', '/Page.html');

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
            duration: 0.5
        }
    )
}


$.getJSON('/Json/techNoteList.json', function (data) {
    $.each(data, function (key, items) {
        // ul class 생성: 첫글자 대문자
        const ulClass = ".off" + key.charAt(0).toUpperCase() + key.slice(1);

        // page 아닌 경우

        if(key === 'techTotal') return;

        if (key !== 'page') {
            $.each(items, function (idx, obj) {
                if (obj.title && obj.url) {
                    const $li = $('<li>').append(
                        $('<a>').attr('href', obj.url).text(obj.title)
                    );
                    $(ulClass).append($li);
                }
            });
        }
        // page인 경우 target="_blank"
        else {
            $.each(items, function (idx, obj) {
                if (obj.title && obj.url) {
                    const $li = $('<li>').append(
                        $('<a>').attr({
                            href: obj.url,
                            target: '_blank'
                        }).text(obj.title)
                    );
                    $(ulClass).append($li);
                }
            });
        }
    });
});
