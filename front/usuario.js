let pusuario = document.getElementById("pusuario");
let pclave = document.getElementById("pclave");
let iclave = document.getElementById("cclave");
let btnCambiar = document.getElementById("btndecambiodelusuario");
let ptrofeos = document.getElementById("ptrofeos");

let usuario = "Invitado";
let clave = "1234";
let mostrarInputs = false; 
let trofeos = 1;

// Función de usuario
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
    clave = iclave.value;
    actualizarTextoClave();
  }
});

// Inicializar
actualizarTextoUsuario();
actualizarTextoClave();
actualizarVisibilidad();
actualizartrofeos();