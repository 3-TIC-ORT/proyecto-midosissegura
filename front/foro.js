let mostrarcambiardatos = true;
let comentarios = []
gmail = document.getElementById("gmail").value;
console.log( "correo electronico:" +gmail);
ratioinsulina = document.getElementById("ratioinsulina").value;
console.log("ratio de insulina:" + ratioinsulina);
function actualizarVisibilidad() {
    const elementos = document.querySelectorAll("#contraseña, #gmail, #ratioinsulina");
    elementos.forEach(el => {
        el.style.display = mostrarcambiardatos ? "block" : "none";
    });
}
