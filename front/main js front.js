let mostrarcambiardatos = false;
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
        const elementos = document.querySelectorAll("#contraseña, #gmail, #ratioinsulina");
        elementos.forEach(el => {
            el.style.display = mostrarcambiardatos ? "block" : "none";
        });
    }
    function a(){
        mostrarcambiardatos= true;  
        actualizarVisibilidad()
       }
 
  
window.onload = actualizarVisibilidad;
document.getElementById("btndecambiodelusuario").addEventListener("click", a);
if ( ratioinsulina !== "" ||  gmail !== "" || contrseña !== "" ){
    function b (){
    mostrarcambiardatos= false;  
    actualizarVisibilidad()}
    document.getElementById("btndecambiodelusuario").addEventListener("click", b);
}
