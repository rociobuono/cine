import { crearP, crearH, crearHa, crearImg, crearImgA } from "./functions.mjs";
import { GET } from "../../services/fetch.mjs";
const Cards = () => {

    /*-------------------------------Combos-----------------------------------------*/

    /*const $comboTituloDiv1 = document.getElementById("comboTituloDiv1");
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
    $comboPDiv4.appendChild(crearP("Incluye: Bolsa de Pochoclos","comboP4"));*/
    
    const url2 = "CombosController/"
    const cargarCombos = async () => {
        let rsp = await GET (url + 'get');
        console.log(rsp);
        let $combos = document.getElementById("comboCard");
        if(rsp?.error === false){
            rsp.data.forEach(el => {
                let $div = document.createElement("div");
                $div.classList.add("combo");
                
                let $tituloCombo = document.createElement("div");
                $tituloCombo.classList.add("tituloCombo");
                $div.appendChild($tituloCombo);
                $tituloCombo.crearHa(2, el.titulo);

                let $imgCombo = document.createElement("div");
                $imgCombo.classList.add("imgCombo");
                $div.appendChild($imgCombo);
                $imgCombo.crearImgA(el.imagen);

                let $descrCombo = document.createElement("div");
                $descrCombo.classList.add("descrCombo");
                $div.appendChild($descrCombo);
                $descrCombo.crearP(el.descripcion);
                        
                $combos.appendChild($div);
            });
        }
    }
    cargarCombos();

    /*-------------------------------Cartelera-----------------------------------------*/
    const url = "CarteleraController/";
    const cargarPeliculas = async () => {
        let rsp = await GET(url + 'get');
        console.log(rsp);

        let $peliculas = document.getElementById("peliculas");
        if(rsp?.error === false)
        {
            rsp.data.forEach((el) => {
                //console.log(document.createElement);
                let $div = document.createElement("div");
                $div.setAttribute("id", `pelicula${el.id}`);
                $div.classList.add("row");

                let $colIz = document.createElement("div");
                let $colDe = document.createElement("div");
                $colIz.classList.add("colIzq");
                $colDe.classList.add("colDer");
                $div.appendChild($colIz);
                $div.appendChild($colDe);
                
                let $imgPel = document.createElement("div");
                $imgPel.classList.add("imgPelicula");
                $colIz.appendChild($imgPel);

                let $img = document.createElement("img");
                $img.setAttribute("src", el.url);
                $imgPel.appendChild($img);

                let $pelCont = document.createElement("div");
                $colIz.appendChild($pelCont);

                let $pelInfo = document.createElement("div");
                $pelInfo.appendChild(crearHa(3,el.titulo));
                $pelInfo.appendChild(crearP(el.sinopsis));

                let $genero = document.createElement("div");
                $genero.appendChild(crearHa(6,el.genero));

                $pelCont.appendChild($pelInfo);
                $pelCont.appendChild($genero);

                let $aside = document.createElement("aside");
                $colDe.appendChild($aside);

                let $director = document.createElement("div");
                $director.appendChild(crearImgA("./resources/Cartelera/director.png"));
                $director.appendChild(crearHa(5,el.director));

                let $actores = document.createElement("div");
                $actores.classList.add("actores");
                $actores.appendChild(crearImgA("./resources/Cartelera/estrella.png"));
                
                let $actorestxt = document.createElement("div");
                $actorestxt.classList.add("actores");
                $actorestxt.appendChild(crearP(el.actores));

                let $publico = document.createElement("div");
                $publico.appendChild(crearImgA("./resources/Cartelera/publico.png"));
                $publico.appendChild(crearP(el.publico));

                $aside.appendChild($director);
                $aside.appendChild($actores);
                $aside.appendChild($actorestxt);
                $aside.appendChild($publico);

                $peliculas.appendChild($div);
            });

        }
    }
    cargarPeliculas();
    /*
    //Cartelera 1
    const $peliculaInfo1 = document.getElementById("peliculaInfo1");
    const $genero1 = document.getElementById("genero1");
    const $divImg1 = document.getElementById("imgPelicula1");

    const $director1 = document.getElementById("director1");
    const $actores1logo = document.getElementById("actores1logo");
    const $actores1txt = document.getElementById("actores1txt");
    const $publico1 = document.getElementById("publico1");

    $divImg1.appendChild(crearImg("imgCart1","./resources/Cartelera/kungfupandacart.jpg"));
    $peliculaInfo1.appendChild(crearH(3,"titulo1","KUNG FU PANDA 4 - 2D CAST"));
    $peliculaInfo1.appendChild(crearP("Después de tres aventuras desafiando a la muerte y" + 
    "derrotando a villanos de clase mundial con su incomparable coraje y sus alocadas habilidades en" + 
    "las artes marciales, Po, el Guerrero Dragón, es llamado por el destino para tomarse un descanso.","info1"));
    $genero1.appendChild(crearH(6,"gen1","GENERO: ANIMACION   |   DURACION: 94 MIN"));

    $director1.appendChild(crearImg("imgDirector1","./resources/Cartelera/director.png"));
    $director1.appendChild(crearH(5,"nombreDirec1","MIKE MITCHELL"));
    $actores1logo.appendChild(crearImg("imgAct1","./resources/Cartelera/estrella.png"));
    $actores1txt.appendChild(crearP("Jack Black, Angelina Jolie, Jackie Chan, Seth Rogen," + 
    " Dustin Hoffman, Awkwafina, Viola Davis.","nombreAct1"));
    $publico1.appendChild(crearImg("imgPublic1","./resources/Cartelera/publico.png"));
    $publico1.appendChild(crearP("APTA PARA TODO PÚBLICO","public1"));

    //Cartelera 2 

    const $peliculaInfo2 = document.getElementById("peliculaInfo2");
    const $genero2 = document.getElementById("genero2");
    const $divImg2 = document.getElementById("imgPelicula2");

    const $director2 = document.getElementById("director2");
    const $actores2logo = document.getElementById("actores2logo");
    const $actores2txt = document.getElementById("actores2txt");
    const $publico2 = document.getElementById("publico2");

    $divImg2.appendChild(crearImg("imgCart2","./resources/Cartelera/primeraprof.jpg"));
    $peliculaInfo2.appendChild(crearH(3,"titulo2","LA PRIMERA PROFECIA - 2D SUB"));
    $peliculaInfo2.appendChild(crearP("Cuando una joven estadounidense es enviada a Roma para comenzar una vida de servicio a la Iglesia," + 
    "descubre una oscuridad que la lleva a cuestionar su propia fe y devela una conspiración aterradora que espera provocar" + 
    "el nacimiento de la encarnación del mal.","info2"));
    $genero2.appendChild(crearH(6,"gen2","GENERO: TERROR   |    DURACION: 119 MIN"));

    $director2.appendChild(crearImg("imgDirector2","./resources/Cartelera/director.png"));
    $director2.appendChild(crearH(5,"nombreDirec2","ARKASHA STEVENSON "));
    $actores2logo.appendChild(crearImg("imgAct2","./resources/Cartelera/estrella.png"));
    $actores2txt.appendChild(crearP("Nell Tiger Free, Tawfeek Barhom , Sonia Braga, Ralph Ineson y Bill Nighy.","nombreAct2"));
    $publico2.appendChild(crearImg("imgPublic2","./resources/Cartelera/publico.png"));
    $publico2.appendChild(crearP("APTA PARA MAYORES DE 16 AÑOS","public2"));

    //Cartelera 3 
    const $divImg3 = document.getElementById("imgPelicula3");
    const $peliculaInfo3 = document.getElementById("peliculaInfo3");
    const $genero3 = document.getElementById("genero3");

    const $director3 = document.getElementById("director3");
    const $actores3logo = document.getElementById("actores3logo");
    const $actores3txt = document.getElementById("actores3txt");
    const $publico3 = document.getElementById("publico3");

    $divImg3.appendChild(crearImg("imgCart3","./resources/Cartelera/ungatoconsuerte.jpg"));
    $peliculaInfo3.appendChild(crearH(3,"titulo3","UN GATO CON SUERTE - 2D CAST"));
    $peliculaInfo3.appendChild(crearP("Un gato mimado da por sentada la suerte que le ha tocado tras ser rescatado y amado por Rose," + 
    " una estudiante apasionada y de buen corazón. Cuando pierde su novena vida, el destino interviene para que emprenda" +
    " un viaje transformador.","info3"));
    $genero3.appendChild(crearH(6,"gen3","GENERO: ANIMACIÓN FAMILIAR   |   DURACION: 88 MIN"));

    $director3.appendChild(crearImg("imgDirector3","./resources/Cartelera/director.png"));
    $director3.appendChild(crearH(5,"nombreDirec3","CHRISTOPHER JENKIN"));
    $actores3logo.appendChild(crearImg("imgAct3","./resources/Cartelera/estrella.png"));
    $actores3txt.appendChild(crearP("Mo Gilligan, Simone Ashley, Sophie Okonedo.","nombreAct3"));
    $publico3.appendChild(crearImg("imgPublic3","./resources/Cartelera/publico.png"));
    $publico3.appendChild(crearP("APTA PARA TODO PUBLICO","public3"));

    //Cartelera 4 

    const $divImg4 = document.getElementById("imgPelicula4");
    const $peliculaInfo4 = document.getElementById("peliculaInfo4");
    const $genero4 = document.getElementById("genero4");

    const $director4 = document.getElementById("director4");
    const $actores4logo = document.getElementById("actores4logo");
    const $actores4txt = document.getElementById("actores4txt");
    const $publico4 = document.getElementById("publico4");

    $divImg4.appendChild(crearImg("imgCart4","./resources/Cartelera/backtoblack.jpg"));
    $peliculaInfo4.appendChild(crearH(3,"titulo4","BACK TO BLACK - 2D SUB"));
    $peliculaInfo4.appendChild(crearP("La vida personal y profesional de la cantante y compositora Amy Winehouse," + 
    "que comenzó como cantante de jazz para convertirse en una superestrella mundial de la música ganadora de varios premios Grammy." + 
    "Su vida se truncó en 2011, a los 27 años, debido al consumo y abuso de alcohol y drogas.","info4"));
    $genero4.appendChild(crearH(6,"gen4","GENERO: DRAMA MUSICAL  |   DURACION: 122 MIN"));

    $director4.appendChild(crearImg("imgDirector4","./resources/Cartelera/director.png"));
    $director4.appendChild(crearH(5,"nombreDirec4","SAM TAYLOR-JONHSON"));
    $actores4logo.appendChild(crearImg("imgAct4","./resources/Cartelera/estrella.png"));
    $actores4txt.appendChild(crearP("Marisa Abela, Ryan O'Doherty, Jack O'Connell, Lesley Manville," + 
    "Eddie Marsan, Sam Buchanan, Dywayne Thomas, Thelma Ruby, Jo Krayer. ","nombreAct4"));
    $publico4.appendChild(crearImg("imgPublic4","./resources/Cartelera/publico.png"));
    $publico4.appendChild(crearP("APTA PARA MAYORES DE 16 AÑOS","public4"));

    //Cartelera 5

    const $divImg5 = document.getElementById("imgPelicula5");
    const $peliculaInfo5 = document.getElementById("peliculaInfo5");
    const $genero5 = document.getElementById("genero5");

    const $director5 = document.getElementById("director5");
    const $actores5logo = document.getElementById("actores5logo");
    const $actores5txt = document.getElementById("actores5txt");
    const $publico5 = document.getElementById("publico5");

    $divImg5.appendChild(crearImg("imgCart5","./resources/Cartelera/guerracivil.jpg"));
    $peliculaInfo5.appendChild(crearH(3,"titulo5","GUERRA CIVIL - 2D SUB"));
    $peliculaInfo5.appendChild(crearP("En un futuro cercano, un equipo de periodistas viaja a través de los " + 
    "Estados Unidos durante una guerra civil que se intensifica rápidamente y que ha envuelto a toda la nación," + 
    " luchando por sobrevivir en este territorio donde el gobierno se ha convertido en una dictadura distópica.","info5"));
    $genero5.appendChild(crearH(6,"gen5","GENERO: ACCIÓN THRILLER   |   DURACION: 109 MIN"));

    $director5.appendChild(crearImg("imgDirector5","./resources/Cartelera/director.png"));
    $director5.appendChild(crearH(5,"nombreDirec5","ALEX GARLAND "));
    $actores5logo.appendChild(crearImg("imgAct5","./resources/Cartelera/estrella.png"));
    $actores5txt.appendChild(crearP("Kirsten Duns, Wagner Moura, Cailee Spaeny, Jesse Plemons, Jefferson White, " + 
    "Nick Offerman.","nombreAct5"));
    $publico5.appendChild(crearImg("imgPublic5","./resources/Cartelera/publico.png"));
    $publico5.appendChild(crearP("APTA PARA MAYORES DE 16 AÑOS","public5"));
    */


}
export default Cards;



