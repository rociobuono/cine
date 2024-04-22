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