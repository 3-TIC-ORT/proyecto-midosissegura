let pusuario = document.getElementById("pusuario");
let pclave = document.getElementById("pclave");
let iclave = document.getElementById("cclave");
let btnCambiar = document.getElementById("btndecambiodelusuario");
let ptrofeos = document.getElementById("ptrofeos");
connect2Server("http://127.0.0.1:3001");
postEvent("usuarior",{},definicion)
function definicion(data){
let nombre = data[0] ;
let usuario=""
let clave = "1234";
let mostrarInputs = false; 
let trofeos = 1;
let claveant=""

function actualizarTextoUsuario() {
  pusuario.textContent = "Usuario: " + usuario;
}

// Función de clave
function actualizarTextoClave() {
  pclave.textContent = "Tu contraseña es: " + clave;
}

// Función de los trofeos
function actualizartrofeos() {
  ptrofeos.textContent = "Trofeos: " + trofeos;
}

// Ver inputs
function actualizarVisibilidad() {
  const elementos = document.querySelectorAll("#cclave");
  elementos.forEach(el => {
    el.style.display = mostrarInputs ? "block" : "none";
  });
}

// Alternar visibilidad con el botón
btnCambiar.addEventListener("click", () => {
  mostrarInputs = !mostrarInputs;
  actualizarVisibilidad();
});

// Cambiar clave al presionar Enter
iclave.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    claveant=clave
    clave = iclave.value;
   if(confirm("estas seguro que "+clave +" sea tu nueva contraseña?")){
   actualizarTextoClave();
    mostrarInputs = false;
    actualizarVisibilidad(false)
    iclave.value = "";
  }
  else{
    clave=claveant
       actualizarTextoClave();
    mostrarInputs = false;
    actualizarVisibilidad(false)
    iclave.value = "";
  }
}});
actualizarTextoUsuario();
actualizarTextoClave();
actualizarVisibilidad();
actualizartrofeos();}