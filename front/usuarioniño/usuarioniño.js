connect2Server();

let nombre = localStorage.getItem("nombreniño");
let apellido = localStorage.getItem("apellidoniño");
const contraseña = localStorage.getItem ("contraseña");
let rationiño = 0;
let TROFEOS = 0;

function actualizarDatosUsuario () {
    document.getElementById("nombreyapellido").textContent = nombre + " " + apellido;
    document.getElementById("ratio").textContent = rationiño;
    document.getElementById("trofeos").textContent = TROFEOS;
}

function datosUsuario() {
    postEvent ("UsuarioRegistrado", {
        NOMBREniño:nombre,
        APELLIDOniño:apellido
    },
    function (data) {
        nombre=data.NOMBREniño,
        apellido=data.APELLIDOniño,
        rationiño=data.RATIO

        actualizarDatosUsuario();
    }
    
)
}

datosUsuario();


// LO QUE ME RECOMIENDA CHAT QUE HAGA PARA HACER QUE SE MUESTREN LAS IMAGENES DEL AVATAR DEPENDIENDO DEL DATA-VALOR TOTAL:
// Leer el número guardado
const codigo = localStorage.getItem("contraseña");

// Si no hay nada guardado, salimos
if (!codigo) {
  console.log("No hay código guardado todavía");
} else {
  // Buscar TODAS las imágenes que tienen data-valor
  const todasLasImagenes = document.querySelectorAll("img[data-valor]");

  // Recorrerlas y mostrar solo las que coinciden con parte del código
  todasLasImagenes.forEach(img => {
    if (codigo.includes(img.dataset.valor)) {
      img.classList.add("visible");
    } else {
      img.classList.remove("visible");
    }
  });
}


