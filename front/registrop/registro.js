let nombrep =document.getElementById("nombrep")
let apellido =document.getElementById("apellido")
let niño =document.getElementById("nombreh")
let RATIO =document.getElementById("RATIO")
let contraseña =document.getElementById("contraseña")
let dosis=document.getElementById("dosis")
let registroBTN=document.getElementById("registroBTN")
connect2Server()
registroBTN.addEventListener("click", () => {
postEvent("registro", {
    NOMBRE: document.getElementById("nombrep").value,
    APELLIDOniño: document.getElementById("apellidoh").value,
    APELLIDO: document.getElementById("apellido").value,
    CONTRASENA: document.getElementById("contraseña").value,
    RATIO:document.getElementById("RATIO").value,
    NOMBREniño:document.getElementById("nombreh").value,
    DOSIS:document.getElementById("dosis").value,
  }, registro);});
  function registro(){
if (cuentacreada=true){
    alert("se creo correctamente la cuenta")
}
else if ( cuentacreada=false){
    alert("vueva a intentar y revise si ya existe el usuario")
}
  }