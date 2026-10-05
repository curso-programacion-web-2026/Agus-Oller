const botonesVerMas= document.querySelectorAll(".verMas");
//Ver Menos
function alternarInformacion(event){
    const boton=event.target;
    const infoExtra= boton.previousElementSibling;
    infoExtra.classList.toggle('oculto');

    if(infoExtra.classList.contains('oculto')){
         boton.textContent='[Ver mas]';
     } else{
        boton.textContent='[Ver menos]';
     } 
}     


botonesVerMas.forEach(function(boton)
{
    boton.addEventListener('click', alternarInformacion);
});

const botonCambiar =
 document.getElementById("botonCambiar");
 const tituloInicio = 
 document.getElementById("tituloInicio");
 let contador=0;
 botonCambiar.addEventListener("click", function(){
     contador++;
     if(contador===1){
         tituloInicio.textContent= "¡Bienvenidos a CR ACCESORIOS!";
     } else if(contador===2){   tituloInicio.textContent="¡Todo para tu Vehiculo!";
     } else if(contador===3){
     tituloInicio.textContent="¡Gracias por visitar CR ACCESORIOS";
     contador=0;
     }
    });

const TextoInicio = document.getElementById("textoInicio");
const disminuir = document.getElementById("disminuir");
const normal = document.getElementById("normal");
const aumentar = document.getElementById("aumentar");
let tamaño= 16;
aumentar.addEventListener("click", function(){
    if (tamaño<30){
        tamaño = tamaño + 2;
        TextoInicio.style.fontSize= tamaño + "px";
    }
});

disminuir.addEventListener("click",function(){
    if (tamaño>10){
        tamaño = tamaño - 2;
        TextoInicio.style.fontSize=tamaño + "px";
    }
});
normal.addEventListener("click",function(){
    tamaño= 16;
    TextoInicio.style.fontSize= tamaño + "px";

});
const formulario= document.getElementById("formulario");
formulario.addEventListener("submit",function(event){
    event.prevent
}
)
const VolverArriba = document.getElementById("VolverArriba");
window.addEventListener("scroll", function () {
    if (window.scrollY> 300){
        VolverArriba.style.display = "block";
    } else {
        VolverArriba.style.display = "none";
    }

});
VolverArriba.addEventListener("click",function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// CARRUSEL DE IMAGENES

const imagenesCarrusel = [
    "carrusel1_lavado.png",
    "carrusel2_cera.png",
    "carrusel3_interior.png",
    "carrusel4_exterior.png"
];

let imagenActual = 0;

const imagenCarrusel = document.getElementById("imagenCarrusel");
const botonSiguiente = document.getElementById("siguiente");
const botonAnterior = document.getElementById("anterior");

botonSiguiente.addEventListener("click", function() {
    imagenActual++;

    if (imagenActual >= imagenesCarrusel.length) {
        imagenActual = 0;
    }

    imagenCarrusel.src = imagenesCarrusel[imagenActual];
});

botonAnterior.addEventListener("click", function() {
    imagenActual--;

    if (imagenActual < 0) {
        imagenActual = imagenesCarrusel.length - 1;
    }

    imagenCarrusel.src = imagenesCarrusel[imagenActual];
});
// FORMULARIO DE CONTACTO

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const resultado = document.getElementById("resultado");

    if (nombre === "" || email === "" || mensaje === "") {
        resultado.textContent = "Por favor, completá todos los campos.";
    } else {
        resultado.textContent = "¡Mensaje enviado correctamente!";
        formulario.reset();
    }

});
