const imagenes = [
    "imagenes/fondo1.jpg",
    "imagenes/fondo2.jpg",
    "imagenes/fondo3.jpg",
    "imagenes/fondo4.jpg"
];

const hero = document.querySelector(".hero");

let indice = 0;

hero.style.backgroundImage = `url('${imagenes[0]}')`;
hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "center";
hero.style.transition = "background-image 1s ease-in-out";

setInterval(() => {

    indice++;

    if(indice >= imagenes.length){
        indice = 0;
    }

    hero.style.backgroundImage =
        `url('${imagenes[indice]}')`;

}, 5000);