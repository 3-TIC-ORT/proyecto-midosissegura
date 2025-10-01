
let btniniciosesion= document.getElementById("btniniciosesion")
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
    console.log("ratio de insulina:" + ratioinsulina);
       const inputnombredeusuario= document.getElementById("nombre");
    const  valorinputnomredeusuario= inputnombredeusuario.value;
    let nombre = valorinputnomredeusuario;
    console.log("ratio de insulina:" + nombre);}
    connect2Server("http://127.0.0.1:3000");
function obtenerDatosUsuario() {
    return {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        gmail: document.getElementById("gmail").value,
        contraseña: document.getElementById("contraseña").value
    };
}
btniniciosesion.addEventListener("click", () => {
    const datos = obtenerDatosUsuario();
    postEvent("iniciarsesion", datos, (data) => {
        if (data === true) {
            alert("Inicio de sesión exitoso ✅");
        } else {
            alert("Error en inicio de sesión ❌");
        }
    });
});


