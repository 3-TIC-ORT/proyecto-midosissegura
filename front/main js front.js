let mostrarcambiardatos = true;
let contrseña = "";
let gmail = "";
let ratioinsulina = "";
function cambiardatosdelusuario() {
   
    contrseña = document.getElementById("contraseña").value;
    console.log("contraseña:" + contrseña);

    gmail = document.getElementById("gmail").value;
    console.log( "correo electronico:" +gmail);
    ratioinsulina = document.getElementById("ratioinsulina").value;
    console.log("ratio de insulina:" + ratioinsulina);}
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
