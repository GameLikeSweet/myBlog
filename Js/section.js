function mkSection(title) {
    const section = document.createElement("section");

    if( title == undefined) section.innerText = 'section';
    else {
        section.innerText = title;
        section.classList.add(title);
    }

    document.getElementById('main').appendChild(section);
}