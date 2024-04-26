import { crearImg } from "./functions.mjs";
const Gallery = () =>{
    const $oferta1 = document.getElementById("oferta1");
    const $oferta2 = document.getElementById("oferta2");
    const $oferta3 = document.getElementById("oferta3");
    const $oferta4 = document.getElementById("oferta4");
    const $oferta5 = document.getElementById("oferta5");
    const $oferta6 = document.getElementById("oferta6");
    const $oferta7 = document.getElementById("oferta7");
    const $oferta8 = document.getElementById("oferta8");
    
    $oferta1.appendChild(crearImg("of1", "./resources/ofertas/71_img1.jpg"));
    $oferta2.appendChild(crearImg("of2", "./resources/ofertas/176_img1 (1).jpg"));
    $oferta3.appendChild(crearImg("of3", "./resources/ofertas/193_img1 (1).jpg"));
    $oferta4.appendChild(crearImg("of4", "./resources/ofertas/Untitled design.png"));
    $oferta5.appendChild(crearImg("of5", "./resources/ofertas/of5.png"));
    $oferta6.appendChild(crearImg("of6", "./resources/ofertas/osde.png"));
    $oferta7.appendChild(crearImg("of7", "./resources/ofertas/movi.png"));
    $oferta8.appendChild(crearImg("of8", "./resources/ofertas/bconacion.png"));
}
export default Gallery ;