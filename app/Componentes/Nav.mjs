const Nav = () => {
    const $idNav = document.getElementById("nav");
    const $sectInicio = document.getElementById("sectInicio");
    const $sectCombos = document.getElementById("sectCombos");
    const $sectCartelera = document.getElementById("sectCartelera");

    const crearA = (id, href, txt) => {
        let $a = document.createElement("a");
        $a.setAttribute("id", id);
        $a.innerHTML = txt;
        $a.href = href;

        return $a;
    }
    const crearImg = (id, src) => {
        let $img = document.createElement("img");
        $img.setAttribute("id", id);
        $img.src = src;
        return $img;
    }
    const crearLista = ($a) => {
        let $ul = document.createElement("ul");
        let $li = document.createElement("li");
        $li.appendChild($a);
        $ul.appendChild($li);
        return $ul;
    }
    $idNav.appendChild(crearImg("logoNavbar", "./resources/Logo.png")); //crear el logo y meterlo en el nav
    $idNav.appendChild(crearLista(crearA("idInicio", "#sectInicio", "INICIO"))); //crear los botones y meterlos en el nav
    $idNav.appendChild(crearLista(crearA("idCartelera", "#sectCartelera", "CARTELERA")));
    $idNav.appendChild(crearLista(crearA("idCombos", "#sectCombos", "COMBOS")));

    const $inicio = document.getElementById("idInicio"); //Estos son los botones
    const $cartelera = document.getElementById("idCartelera");
    const $combos = document.getElementById("idCombos");

    //HOVER EFECT 
    $inicio.addEventListener('mouseover', () =>{$inicio.style.color ="#CFDEDF"});
    $inicio.addEventListener('mouseout', () =>{$inicio.style.color ="#fff"});
    $cartelera.addEventListener('mouseover', () =>{$cartelera.style.color ="#CFDEDF"});
    $cartelera.addEventListener('mouseout', () =>{$cartelera.style.color ="#fff"});
    $combos.addEventListener('mouseover', () =>{$combos.style.color ="#CFDEDF"});
    $combos.addEventListener('mouseout', () =>{$combos.style.color ="#fff"});

    const crearH = (num, id, txt) => {
        let $h = document.createElement(`h${num}`);
        $h.innerHTML = txt;
        $h.setAttribute("id", id);
        return $h;
    }
    $sectInicio.appendChild(crearH(1, "tituloInicio", "ESTE ES EL INICIO")); //Titulos de las secciones
    $sectCombos.appendChild(crearH(1, "tituloCombos", "ESTA ES LA SECCION COMBOS"));
    $sectCartelera.appendChild(crearH(1, "tituloCartelera", "ESTA ES LA CARTELERA"));

    //Funciones para que al hacer click en los botones del nav solo aparezcan las secciones pertinentes
    $inicio.addEventListener("click", () => {  
        $sectInicio.style.display = "block"; 
        $sectCombos.style.display = "none";
        $sectCartelera.style.display = "none";
    });
    $cartelera.addEventListener("click", () => { 
        $sectCartelera.style.display = "block"; 
        $sectCombos.style.display = "none";
        $sectInicio.style.display = "none";
    });
    $combos.addEventListener("click", () => {
        $sectCombos.style.display = "block"; 
        $sectCartelera.style.display = "none";
        $sectInicio.style.display = "none";
    });
}

export default Nav;