import { crearAhref, crearImg, crearP, displayInicio, displayCartelera, displayCombos } from "./functions.mjs";

const Footer = () => {
    const $footer = document.getElementById("footer");
    const $btnsFooter = document.getElementById("botonesFooter");
    const $logo = document.getElementById("logo");
    const $copyright = document.getElementById("copyright");

    const $sectInicio = document.getElementById('sectInicio');
    const $sectCartelera = document.getElementById('sectCartelera');
    const $sectCombos = document.getElementById('sectCombos');
    $btnsFooter.appendChild(crearAhref("btnInicio","#sectInicio", "Inicio"));
    $btnsFooter.appendChild(crearAhref("btnCartelera", "#sectCartelera","Cartelera"));
    $btnsFooter.appendChild(crearAhref("btnCombos","#sectCombos" ,"Combos"));

    const $btnInicio = document.getElementById("btnInicio");
    const $btnCartelera = document.getElementById("btnCartelera");
    const $btnCombos = document.getElementById("btnCombos");

    $btnInicio.addEventListener("click", () => {  
        displayInicio($sectInicio, $sectCartelera, $sectCombos);
    });
    $btnCartelera.addEventListener("click", () => { 
        displayCartelera($sectInicio, $sectCartelera, $sectCombos);
    });
    $btnCombos.addEventListener("click", () => {
        displayCombos($sectInicio, $sectCartelera, $sectCombos);
    });

    $copyright.appendChild(crearP("Copyright © BUONO-QUIKUEN. Todos los derechos reservados.", "txtCop"));
    $logo.appendChild(crearImg("logo", "./resources/logoConNombre.png"));
}
export default Footer;
