import { crearA,crearImg, crearH } from "./functions.mjs";
const Carousel = () => {
  const $img1Div = document.getElementById("img1");
  const $img2Div = document.getElementById("img2");
  const $img3Div = document.getElementById("img3");
  const $img4Div = document.getElementById("img4");
  const $img5Div = document.getElementById("img5");
  const $carousel = document.getElementById("carousel");
  const $tituloImgDiv1 = document.getElementById("tituloImgDiv1");
  const $tituloImgDiv2 = document.getElementById("tituloImgDiv2");
  const $tituloImgDiv3 = document.getElementById("tituloImgDiv3");
  const $tituloImgDiv4 = document.getElementById("tituloImgDiv4");
  const $tituloImgDiv5 = document.getElementById("tituloImgDiv5");
  const $paginationDiv = document.getElementById("pagination");

  $img1Div.appendChild(crearImg("imagen1", "./resources/peliculas/kungFuPanda.jpg"));
  $img2Div.appendChild(crearImg("imagen2", "./resources/peliculas/laPrimeraProfecia.jpg"));
  $img3Div.appendChild(crearImg("imagen3", "./resources/peliculas/gatoConSuerte.jpg"));
  $img4Div.appendChild(crearImg("imagen4", "./resources/peliculas/backToBlack.jpg"));
  $img5Div.appendChild(crearImg("imagen4", "./resources/peliculas/guerraCivil.jpg"));
  $carousel.appendChild(crearA("prev", "<"));
  $carousel.appendChild(crearA("next", ">"));
  $tituloImgDiv1.appendChild(crearH(1, "tituloImg1", "KUNG FU PANDA"));
  $tituloImgDiv2.appendChild(crearH(1, "tituloImg2", "LA PRIMERA PROFECIA"));
  $tituloImgDiv3.appendChild(crearH(1, "tituloImg3", "UN GATO CON SUERTE"));
  $tituloImgDiv4.appendChild(crearH(1, "tituloImg4", "BACK TO BLACK"));
  $tituloImgDiv5.appendChild(crearH(1, "tituloImg5", "GUERRA CIVIL"));
  $paginationDiv.appendChild(crearA("pagination1","1"));
  $paginationDiv.appendChild(crearA("pagination2","2"));
  $paginationDiv.appendChild(crearA("pagination3","3"));
  $paginationDiv.appendChild(crearA("pagination4","4"));
  $paginationDiv.appendChild(crearA("pagination5","5"));

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  function showSlidesIndex(t){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[t].style.display = "block";
  }


  document.getElementById("prev").addEventListener("click", () => {
    plusSlides(-1);
  })
  document.getElementById("next").addEventListener("click", () => {
    plusSlides(1);
  })
  let slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  const $pag1 = document.getElementById("pagination1");
  const $pag2 = document.getElementById("pagination2");
  const $pag3 = document.getElementById("pagination3");
  const $pag4 = document.getElementById("pagination4");
  const $pag5 = document.getElementById("pagination5");
  $pag1.addEventListener("click",() =>{
    showSlidesIndex(0);
  })
  $pag2.addEventListener("click",() =>{
    showSlidesIndex(1);
  })
  $pag3.addEventListener("click",() =>{
    showSlidesIndex(2);
  })
  $pag4.addEventListener("click",() =>{
    showSlidesIndex(3);
  })
  $pag5.addEventListener("click",() =>{
    showSlidesIndex(4);
  })
  $pag1.addEventListener("mouseover",() =>{$pag1.style.background="#709ea1"})
  $pag1.addEventListener("mouseout",() =>{$pag1.style.background="#abc5c7"})
  $pag2.addEventListener("mouseover",() =>{$pag2.style.background="#709ea1"})
  $pag2.addEventListener("mouseout",() =>{$pag2.style.background="#abc5c7"})
  $pag3.addEventListener("mouseover",() =>{$pag3.style.background="#709ea1"})
  $pag3.addEventListener("mouseout",() =>{$pag3.style.background="#abc5c7"})
  $pag4.addEventListener("mouseover",() =>{$pag4.style.background="#709ea1"})
  $pag4.addEventListener("mouseout",() =>{$pag4.style.background="#abc5c7"})
  $pag5.addEventListener("mouseover",() =>{$pag5.style.background="#709ea1"})
  $pag5.addEventListener("mouseout",() =>{$pag5.style.background="#abc5c7"})
}
export default Carousel;