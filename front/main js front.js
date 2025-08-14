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
        const elementos = document.querySelectorAll("#contraseña, #gmail, #ratioinsulina, #btndecambiodelusuario");
        elementos.forEach(el => {
            el.style.display = mostrarcambiardatos ? "block" : "none";
        });
    }

window.onload = actualizarVisibilidad;
let diagnosticos = [];

document.getElementById("btnAgregar").addEventListener("click", agregarDiagnostico);
document.getElementById("btnMostrar").addEventListener("click", mostrarDiagnosticos);

function agregarDiagnostico() {
    const input = document.getElementById("inputDiagnostico");
    const texto = input.value.trim();

    if (texto !== "") {
        diagnosticos.push(texto);
        input.value = "";
        alert("Diagnóstico agregado correctamente.");
    } else {
        alert("Por favor, escribe un diagnóstico.");
    }
}

function mostrarDiagnosticos() {
    const contenedor = document.getElementById("listaDiagnosticos");
    contenedor.innerHTML = "";

    if (diagnosticos.length === 0) {
        contenedor.innerHTML = "<p>No hay diagnósticos cargados.</p>";
        return;
    }

    diagnosticos.forEach(d => {
        const p = document.createElement("p");
        p.textContent = d;
        contenedor.appendChild(p);
    });
}

