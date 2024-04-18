const Carousel = () => {
    const $img1Div = document.getElementById("img1");
    const $img2Div = document.getElementById("img2");
    const $img3Div = document.getElementById("img3");

    $img1Div.appendChild(Nav.crearImg("imagen1", "./resources/peliculas/abigail.png"));
    $img2Div.appendChild(Nav.crearImg("imagen2", "./resources/peliculas/profecia.png"));
    $img3Div.appendChild(Nav.crearImg("imagen3", "./resources/peliculas/kong.png"));

    let slideIndex = 1;
    showSlides(slideIndex);

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
}
export default Carousel;