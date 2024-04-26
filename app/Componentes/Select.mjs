import { crearSelect, crearOption } from "./functions.mjs";
const Select = () => {
    const $selectBox = document.getElementById("selectBox");
    $selectBox.appendChild(crearSelect("select","selectPeliculas"));
    const $select = document.getElementById("selectPeliculas");
    //Cuando tengamos la cartelera armada hay que cambiar los links. 
    $select.appendChild(crearOption("", "TRAILERS")); 
    $select.appendChild(crearOption("https://www.youtube.com/watch?v=kg3Q63gzF6I", "KUNG FU PANDA")); 
    $select.appendChild(crearOption("https://www.youtube.com/watch?v=61rrDlVwvx4", "LA PRIMERA PROFECIA"));
    $select.appendChild(crearOption("https://www.youtube.com/watch?v=Q-njyNFt7QI", "UN GATO CON SUERTE"));
    $select.appendChild(crearOption("https://www.youtube.com/watch?v=rOC7WOSupq8", "BACK TO BLACK"));
    $select.appendChild(crearOption("https://www.youtube.com/watch?v=O7J6bzeQiaA", "GUERRA CIVIL"));
    document.getElementById("selectPeliculas").onchange = function() {
        if (this.selectedIndex!==0) {
            window.location.href = this.value;
        }   
    }
}
export default Select;