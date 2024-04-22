import { crearSelect, crearOption } from "./functions.mjs";
const Select = () => {
    const $selectBox = document.getElementById("selectBox");
    $selectBox.appendChild(crearSelect("select","selectPeliculas"));
    const $select = document.getElementById("selectPeliculas");
    //Cuando tengamos la cartelera armada hay que cambiar los links. 
    $select.appendChild(crearOption("", "PELICULAS")); 
    $select.appendChild(crearOption("https://www.cinespaseoaldrey.com.ar/ficha/3909-KUNG-FU-PANDA-4---2D-CAST#contenido", "KUNG FU PANDA")); 
    $select.appendChild(crearOption("https://www.cinespaseoaldrey.com.ar/ficha/3972-LA-PRIMERA-PROFECIA---2D-SUB#contenido", "LA PRIMERA PROFECIA"));
    $select.appendChild(crearOption("https://www.cinespaseoaldrey.com.ar/ficha/3972-LA-PRIMERA-PROFECIA---2D-SUB#contenido", "SPY FAMILY"));

}
export default Select;