
let btniniciosesion= document.getElementById("btniniciosesion")
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
    postEvent("iniciarsesion", datos, (data) => {
        if (data === true) {
            alert("Inicio de sesión exitoso ✅");
        } else {
            alert("Error en inicio de sesión ❌");
        }
    });
});


 
  

document.getElementById("btndecambiodelusuario").addEventListener("click", a);
function a (){
if ( ratioinsulina !== "" ||  gmail !== "" || contrseña !== "" ){
    
    mostrarcambiardatos= false;  
}
else {
        mostrarcambiardatos= true;  
}
actualizarVisibilidad()}
window.onload = actualizarVisibilidad;
