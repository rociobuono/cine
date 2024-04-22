import { crearA,  crearImg} from "./functions.mjs";
const Carousel = () => {
  const $img1Div = document.getElementById("img1");
  const $img2Div = document.getElementById("img2");
  const $img3Div = document.getElementById("img3");
  const $carousel = document.getElementById("carousel");
  
 
  $img1Div.appendChild(crearImg("imagen1", "./resources/peliculas/kungFuPanda.jpg"));
  $img2Div.appendChild(crearImg("imagen2", "./resources/peliculas/laPrimeraProfecia.jpg"));
  $img3Div.appendChild(crearImg("imagen3", "./resources/peliculas/spyFamily.jpg"));
  $carousel.appendChild(crearA("prev", "<"));
  $carousel.appendChild(crearA("next", ">"));

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