document.write("aside area");

const c = require("/Js/head_menu.js");

document.write("<ul>");
for(let i = 0 ; i < 3; i++)
{
    document.write("<li>"+ c[i] +"</li>")
}
document.write("</ul>");
