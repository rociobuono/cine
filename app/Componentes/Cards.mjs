import { crearP, crearH, crearImg} from "./functions.mjs";

const Cards = () => {

    /*-------------------------------Combos-----------------------------------------*/

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

    /*-------------------------------Cartelera-----------------------------------------*/

    const $pelicula1I = document.getElementById("pelicula1I");
    const $peliculaContenido1 = document.getElementById("peliculaContenido1");
    const $peliculaInfo1 = document.getElementById("peliculaInfo1");
    const $genero1 = document.getElementById("genero1");

    const $director1 = document.getElementById("director1");
    const $actores1 = document.getElementById("actores1");
    const $publico1 = document.getElementById("publico1");

    $pelicula1I.appendChild(crearImg("cartelera1",""));
    $peliculaInfo1.appendChild(crearH(3,"titulo1","KUNG FU PANDA 4 - 2D CAST"));
    $peliculaInfo1.appendChild(crearP("Después de tres aventuras desafiando a la muerte y" + 
    "derrotando a villanos de clase mundial con su incomparable coraje y sus alocadas habilidades en" + 
    "las artes marciales, Po, el Guerrero Dragón, es llamado por el destino para tomarse un descanso." + 
    "Específicamente, se le pide que se convierta en el líder espiritual del Valle de la Paz. ","info1"));
    $genero1.appendChild(crearH(6,"gen1","GENERO: ANIMACION      DURACION: 94 MIN"));

    $director1.appendChild(crearImg("imgDirector1",""));
    $director1.appendChild(crearH(5,"nombreDirec1","MIKE MITCHELL"));
    $actores1.appendChild(crearImg("imgAct1",""));
    $actores1.appendChild(crearP("Jack Black, Angelina Jolie, Jackie Chan, Seth Rogen," + 
    "Dustin Hoffman, Awkwafina, Viola Davis.","nombreAct1"));
    $publico1.appendChild(crearImg("imgPublic1",""));
    $publico1.appendChild(crearP("APTA PARA TODO PÚBLICO CON LEYENDA","public1"));

}
export default Cards;



