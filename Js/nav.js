function nav (menu, url) 
{
    this.menu = menu;
    this.url = url;
}

js = new nav('Js', './js.html');
bj = new nav('백준', 'url');
al = new nav('알고리즘', 'url');
Uni = new nav('Unity', 'Unity.html');

var menu_list = [js, bj , al, Uni];

for (var i = 0 ; i < menu_list.length; i++)
{
    document.write("<li><a href = " + menu_list[i].url + '>'+ menu_list[i].menu + "</a></li>");
}
