const botonnene = document.getElementById ("botonniño");
const botonadulto = document.getElementById ("botonadulto");
function click(event) {
    const boton = event.target.id;
    alert ("El boton presionado es " + boton);
}
botonnene.addEventListener ("click", click);
botonadulto.addEventListener ("click", click);

if (nombre && apellido && gmail && contraseña != 0) {
let nombre = document.getElementById ("nombre").value.trim();
let apellido = document.getElementById ("apellido").value.trim();
let correo = document.getElementById ("gmail").value.trim();
let contraseña = document.getElementById ("contraseña").value.trim();
}


let mostrarElementos = true;
function cambiardatosdelusuario() {
    const inputcontraseña = document.getElementById("contraseña");
    const valorinputcontraseña = inputcontraseña.value;
    let contrseña = valorinputcontraseña;
    console.log("contraseña:" + contrseña);
    const inputgmail = document.getElementById("gmail");
    const valorinputgmail = inputgmail.value;
    let gmail = valorinputgmail;
    console.log( "correo electronico:" +gmail);
    const inputratioinsulina= document.getElementById("ratioinsulina");
    const  valorinputratioinsulina= inputratioinsulina.value;
    let ratioinsulina = valorinputratioinsulina;
    console.log("ratio de insulina:" + ratioinsulina);}
    function actualizarVisibilidad() {
        const elementos = document.querySelectorAll("#contraseña, #gmail, #ratioinsulina, button");
        elementos.forEach(el => {
            el.style.display = mostrarElementos ? "block" : "none";
        });
    }

window.onload = actualizarVisibilidad;