

const app = () =>{

    const $inicio = document.getElementById("inicio");
    const $cartelera = document.getElementById("cartelera");
    const $combos = document.getElementById("combos");
    const $btnInicio = document.getElementById("btnInicio");
    const $btnCartelera = document.getElementById("btnCartelera");
    const $btnCombos = document.getElementById("btnCombos");
    const $idNav = document.getElementById("nav");

    $btnInicio.addEventListener("click", () => { inicio(); });
    $btnCartelera.addEventListener("click", () => { cartelera(); });
    $btnCombos.addEventListener("click", combos);
    
    function crearLista($a){
        let $ul = document.createElement("ul");
        let $li = document.createElement("li");
        $ul.appendChild($li);
        $li.appendChild($a);

        return $ul;
    }
    function crearA(id, href, txt){
        let $a = document.createElement("a");
        $a.setAttribute("id", id);
        $a.innerHTML = txt;
        $a.href = href;

        return $a;
    }
    
    $idNav.appendChild(crearLista(crearA("inicio", "#inicio", "INICIO")));

    function inicio(){
        $inicio.style.display = "block";
        $combos.style.display = "none";
        $cartelera.style.display = "none";
    }
    function cartelera(){
        $inicio.style.display = "none";
        $combos.style.display = "none";
        $cartelera.style.display = "block";
    }

    function combos(){
        $inicio.style.display = "none";
        $cartelera.style.display = "none";
        $combos.style.display = "block";
    }

}

export default app;

