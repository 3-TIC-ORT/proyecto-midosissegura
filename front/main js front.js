
let btniniciosesion= document.getElementById("btniniciosesion")
connect2Server(3000)
function cambiardatosdelusuario() {
   
    contrseña = document.getElementById("contraseña").value;
    console.log("contraseña:" + contrseña);
    gmail = document.getElementById("gmail").value;
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
postEvent("iniciarsesion", {
  NOMBRE: document.getElementById("nombre").value,
  APELLIDO: document.getElementById("apellido").value,
  GMAIL: document.getElementById("gmail").value,
  CONTRASENA: document.getElementById("contraseña").value
}, comprobaciondedatos);

});
function comprobaciondedatos(data) {
    if (data.logueado) {
        alert("Has iniciado sesión con éxito");

    }
else {
    alert("Error al iniciar sesión. Por favor, verifica tus datos e inténtalo de nuevo.");
}}

 
  



