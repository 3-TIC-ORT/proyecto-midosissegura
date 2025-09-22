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
while (ctrofeos!==""){
document.addEventListener("keydown", () => {
  if (event.key === 'Enter'){
    let pclave = document.getElementById("pclave");
    let cclave = document.getElementById("cclave");
    let clave = "";
    function actualizarTextoClave() {
      pclave.textContent = "Tu nueva contraseña es: " + clave;
    }
    cclave.addEventListener("input", () => {
      clave = cclave.value;  
      actualizarTextoClave(); 
    });
    actualizarTextoClave();
  }}); 
}

  function actualizarVisibilidad() {
    const elementos = document.querySelectorAll("#contraseña, #gmail, #ratioinsulina, #btndecambiodelusuario");
    elementos.forEach(el => {
        el.style.display = mostrarcambiardatos ? "block" : "none";
    });
}

window.onload = actualizarVisibilidad;