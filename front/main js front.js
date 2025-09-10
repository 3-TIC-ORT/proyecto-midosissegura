let mostrarcambiardatos = true;
function cambiardatosdelusuario() {
   
    contrseña = document.getElementById("contraseña").value;
    console.log("contraseña:" + contrseña);
    gmail = document.getElementById("gmail").value;
    console.log( "correo electronico:" +gmail);
    const inputratioinsulina= document.getElementById("ratioinsulina");
    const  valorinputratioinsulina= inputratioinsulina.value;
    let ratioinsulina = valorinputratioinsulina;
    console.log("ratio de insulina:" + ratioinsulina);
       const inputnombredeusuario= document.getElementById("ratioinsulina");
    const  valorinputnomredeusuario= inputnombredeusuario.value;
    let nombreusuario = valorinputnomredeusuario;
    console.log("ratio de insulina:" + nombreusuario);}
    function actualizarVisibilidad() {
        const elementos = document.querySelectorAll("#contraseña, #gmail, #ratioinsulina");
        elementos.forEach(el => {
            el.style.display = mostrarcambiardatos ? "block" : "none";
        });
    }

 
  

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
