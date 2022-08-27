let NroImagen = 0
let imagenes = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"] //Para que el usuario cambiase las imagenes, se tendrian que agregar aqui.
let segundos = 4000 //parseFloat(prompt("Ingrese los segundos")) * 1000, con este codigo podria hacer que el usuario ingrese los segundos.

const carouselCss = () => {
    document.getElementById('imagen').style.backgroundImage = `url(${imagenes[NroImagen]})`
    NroImagen ++

    if(NroImagen === imagenes.length) {
        NroImagen = 0
    }
    setTimeout(carouselCss, 3000) 
}

carouselCss()