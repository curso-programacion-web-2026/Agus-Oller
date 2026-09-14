const botonesVERMAS=
document.querySelectorAll("button");
function alternarInformacion(event){
    conts boton=event.target;
    const infoExtra= boton.previousElementSibling;
    infoExtra.classList.toggle("oculto");
}
botonesVERMAS.forEach(function(boton)
{
    boton.addEvetListener("click",alternarInformacion);
});
    
