let mostrarcambiardatos =true;
let comentarios = [];

function actualizarVisibilidad() {
    const elementos = document.querySelectorAll("#agregarcomentario");
    elementos.forEach(el => {
        el.style.display = mostrarcambiardatos ? "block" : "none";
    });
}

document.getElementById("agregarcomentario").addEventListener("click", c);

function c() {
    mostrarcambiardatos = true;

    let comentariov = document.getElementById("comentario").value;
    comentarios.push(comentariov); 
    console.log(comentarios);      
}

window.onload = actualizarVisibilidad;
;


