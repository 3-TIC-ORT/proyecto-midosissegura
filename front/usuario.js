let ptrofeos = document.getElementById("ptrofeos");
let ctrofeos = document.getElementById("ctrofeos");

let trofeos = 1; // valor inicial

function actualizarTexto() {
  ptrofeos.textContent = "Trofeos: " + trofeos;
}

// cuando escribís en el input
ctrofeos.addEventListener("input", () => {
  trofeos = ctrofeos.value; // cambia el valor
  actualizarTexto();        // actualiza el párrafo
});
actualizarTexto();
document.addEventListener("DOMContentLoaded", () => {
    // Elementos
    let pclave = document.getElementById("pclave");
    let cclave = document.getElementById("cclave");

    // Variable inicial
    let clave = "";

    // Función para actualizar el <p>
    function actualizarTextoClave() {
      pclave.textContent = "Tu nueva contraseña es: " + clave;
    }

    // Cuando escribís en el input
    cclave.addEventListener("input", () => {
      clave = cclave.value;  // guardamos lo que escribe el usuario
      actualizarTextoClave(); // mostramos en el párrafo
    });

    // Mostrar estado inicial
    actualizarTextoClave();
  }); 