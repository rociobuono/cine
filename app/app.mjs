const app = () => {

    const $inicio = document.getElementById("idInicio");
    const $cartelera = document.getElementById("idCartelera");
    const $combos = document.getElementById("idCombos");
    const $btnInicio = document.getElementById("btnInicio");
    const $btnCartelera = document.getElementById("btnCartelera");
    const $btnCombos = document.getElementById("btnCombos");
    const $idNav = document.getElementById("nav");

    const crearA = (id, href, txt) => {
        let $a = document.createElement("a");
        $a.setAttribute("id", id);
        $a.innerHTML = txt;
        $a.href = href;

        return $a;
    }
    const crearLista = ($a) => {
        let $ul = document.createElement("ul");
        let $li = document.createElement("li");
        $li.appendChild($a);
        $ul.appendChild($li);
        return $ul;
    }
    $idNav.appendChild(crearLista(crearA("idInicio", "#inicio", "INICIO")));
    $idNav.appendChild(crearLista(crearA("idCartelera", "#cartelera", "CARTELERA")));
    $idNav.appendChild(crearLista(crearA("idCombos", "#combos", "COMBOS")));

    $btnInicio.addEventListener("click", () => { inicio(); });
    $btnCartelera.addEventListener("click", () => { cartelera(); });
    $btnCombos.addEventListener("click", () => { combos(); });
    
    const opcionesNav = (id) => {
        $inicio.style.display = "none";
        $combos.style.display = "none";
        $cartelera.style.display = "none";
        switch (id) {
            case idInicio:
                $inicio.style.display = "block";
                break;
            case idCartelera:
                $cartelera.style.display = "block";
                break;
            case idCombos:
                $combos.style.display = "block";
                break;
            default:
                break;
        }
    }

}

export default app;