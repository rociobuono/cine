import { crearA,crearImg, crearH } from "./functions.mjs";
const Carousel = () => {
  const $img1Div = document.getElementById("img1");
  const $img2Div = document.getElementById("img2");
  const $img3Div = document.getElementById("img3");
  const $carousel = document.getElementById("carousel");
  const $tituloImgDiv1 = document.getElementById("tituloImgDiv1");
  const $tituloImgDiv2 = document.getElementById("tituloImgDiv2");
  const $tituloImgDiv3 = document.getElementById("tituloImgDiv3");

  $img1Div.appendChild(crearImg("imagen1", "./resources/peliculas/kungFuPanda.jpg"));
  $img2Div.appendChild(crearImg("imagen2", "./resources/peliculas/laPrimeraProfecia.jpg"));
  $img3Div.appendChild(crearImg("imagen3", "./resources/peliculas/spyFamily.jpg"));
  $carousel.appendChild(crearA("prev", "<"));
  $carousel.appendChild(crearA("next", ">"));
  $tituloImgDiv1.appendChild(crearH(1, "tituloImg1", "KUNG FU PANDA"));
  $tituloImgDiv2.appendChild(crearH(1, "tituloImg2", "LA PRIMERA PROFECIA"));
  $tituloImgDiv3.appendChild(crearH(1, "tituloImg3", "SPY FAMILY"));

  
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

}
export default Carousel;