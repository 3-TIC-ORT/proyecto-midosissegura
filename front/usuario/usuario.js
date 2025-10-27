let pusuario = document.getElementById("pusuario");
let pclave = document.getElementById("pclave");
let iclave = document.getElementById("cclave");
let btnCambiar = document.getElementById("btndecambiodelusuario");
let ptrofeos = document.getElementById("ptrofeos");
let pdosis= document.getElementById("pdosis");
let pratio= document.getElementById("pratio");
 localStorage.setItem("nombreusuario", "Bryan");
     localStorage.setItem("apellidousuario", "Mbeumo");
connect2Server();
postEvent("UsuarioRegistrado",{
NOMBRE: localStorage.getItem("nombreusuario"),
APELLIDO: localStorage.getItem("apellidousuario")
},definicion)
function definicion(data){
    console.log("Datos recibidos:", data);
  pusuario.textContent = data.NOMBRE + " " + data.APELLIDO;
  pdosis.textContent =+ data.DOSIS ;
  pclave.textContent =data.CONTRASENA;
  ptrofeos.textContent = data.NOMBREniño + " " + data.APELLIDOniño;
}
