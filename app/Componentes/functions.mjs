export const crearA = (id, txt) => {
    let $a = document.createElement("a");
    $a.setAttribute("id", id);
    $a.innerHTML = txt;
    return $a;
}
export const crearImg = (id, src) => {
    let $img = document.createElement("img");
    $img.setAttribute("id", id);
    $img.src = src;
    return $img;
}
export const crearImgA = ( src) => {
    let $img = document.createElement("img");
    $img.src = src;
    return $img;
}
export const crearAhref = (id, href, txt) => {
    let $a = document.createElement("a");
    $a.setAttribute("id", id);
    $a.innerHTML = txt;
    $a.href = href;

    return $a;
}
export const crearLista = ($a) => {
    let $ul = document.createElement("ul");
    let $li = document.createElement("li");
    $li.appendChild($a);
    $ul.appendChild($li);
    return $ul;
}
export const crearH = (num, id, txt) => {
    let $h = document.createElement(`h${num}`);
    $h.innerHTML = txt;
    $h.setAttribute("id", id);
    return $h;
}
export const crearHa = (num, txt) => {
    let $h = document.createElement(`h${num}`);
    $h.innerHTML = txt;
    return $h;
}
export const crearSelect = (name, id) => {
    let $select = document.createElement("select");
    $select.name = name;
    $select.setAttribute("id", id);
    return $select;
}
export const crearOption = (value, txt) => {
    let $option = document.createElement("option");
    $option.value = value;
    $option.innerHTML = txt;
    return $option;
}

export const crearP = (txt) => {
    let $p = document.createElement("p");
    $p.innerHTML = txt;
    return $p;
}
//Funciones para que al hacer click en los botones del nav solo aparezcan las secciones pertinentes
export const displayInicio = ($sectInicio, $sectCartelera, $sectCombos) => {
    $sectInicio.style.display = "block";
    $sectCombos.style.display = "none";
    $sectCartelera.style.display = "none";
}
export const displayCartelera = ($sectInicio, $sectCartelera, $sectCombos) => {
    $sectCartelera.style.display = "block";
    $sectCombos.style.display = "none";
    $sectInicio.style.display = "none";
}
export const displayCombos = ($sectInicio, $sectCartelera, $sectCombos) => {
    $sectCombos.style.display = "block";
    $sectCartelera.style.display = "none";
    $sectInicio.style.display = "none";
}