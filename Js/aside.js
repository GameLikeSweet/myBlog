document.write("aside area");

import {menu_list} from "/Js/head_menu.js";

document.write("<ul>");
for(let i = 0 ; i < 3; i++)
{
    document.write("<li>"+ menu_list[i] +"</li>")
}
document.write("</ul>");
