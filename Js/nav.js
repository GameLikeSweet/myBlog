function navi (menu, url) 
{
    this.menu = menu;
    this.url = url;
}

let js = new navi('Js', './js.html');
let bj = new navi('백준', 'url');
let al = new navi('알고리즘', 'url');
let Uni = new navi('Unity', 'Unity.html');

var menu_list = [js, bj , al, Uni];

const nav = document.getElementById('nav');

for (var i = 0 ; i < menu_list.length; i++)
{
    const li = document.createElement("li");
    const a = document.createElement('a');

    a.href = menu_list[i].url;
    a.innerText = menu_list[i].menu

    li.appendChild(a);
    nav.appendChild(li);
    //document.write("<li><a href = " + menu_list[i].url + '>'+ menu_list[i].menu + "</a></li>");
}
