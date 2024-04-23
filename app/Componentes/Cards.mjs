import { crearP, crearH, crearImg} from "./functions.mjs";

const Cards = () => {

    const $comboCard = document.getElementById("comboCard");
    const $comboTituloDiv1 = document.getElementById("comboTituloDiv1");
    const $comboImgDiv1 = document.getElementById("comboImgDiv1");
    const $comboPDiv1 = document.getElementById("comboPDiv1");

    const $comboTituloDiv2 = document.getElementById("comboTituloDiv2");
    const $comboImgDiv2 = document.getElementById("comboImgDiv2");
    const $comboPDiv2 = document.getElementById("comboPDiv2");

    const $comboTituloDiv3 = document.getElementById("comboTituloDiv3");
    const $comboImgDiv3 = document.getElementById("comboImgDiv3");
    const $comboPDiv3 = document.getElementById("comboPDiv3");

    const $comboTituloDiv4 = document.getElementById("comboTituloDiv4");
    const $comboImgDiv4 = document.getElementById("comboImgDiv4");
    const $comboPDiv4 = document.getElementById("comboPDiv4");

    $comboTituloDiv1.appendChild(crearH(2,"comboTitulo1","COMBO POCHOCLOS"));
    $comboImgDiv1.appendChild(crearImg("comboImg1","./resources/Combos/congaseosa.png"));
    $comboPDiv1.appendChild(crearP("Incluye: Bolsa de Pochoclos y 1 Gaseosa 500ml","comboP1"));

    $comboTituloDiv2.appendChild(crearH(2,"comboTitulo2","NACHOS"));
    $comboImgDiv2.appendChild(crearImg("comboImg2","./resources/Combos/nachos.png"));
    $comboPDiv2.appendChild(crearP("Incluye: Nachos con Queso","comboP2"));

    $comboTituloDiv3.appendChild(crearH(2,"comboTitulo3","BALDE DE POCHOCLOS"));
    $comboImgDiv3.appendChild(crearImg("comboImg3","./resources/Combos/baldexl.png"));
    $comboPDiv3.appendChild(crearP("Incluye: Balde XL de Pochoclos","comboP3"));

    $comboTituloDiv4.appendChild(crearH(2,"comboTitulo4","BOLSA DE POCHOCLOS"));
    $comboImgDiv4.appendChild(crearImg("comboImg4","./resources/Combos/bolsamediana.png"));
    $comboPDiv4.appendChild(crearP("Incluye: Bolsa de Pochoclos","comboP4"));
}
export default Cards;



