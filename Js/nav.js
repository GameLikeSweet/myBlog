function navi (menu, url) 
{
    this.menu = menu;
    this.url = url;
}

let Web = new navi('Web', './Web.html');
let Alg = new navi('알고리즘', './Algorithm.html');
let Uni = new navi('Unity', './Unity.html');
let Git = new navi("Git", './Git.html');

var menu_list = [Web , Alg, Uni, Git];

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
