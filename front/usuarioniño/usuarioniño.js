connect2Server();

let nombre = localStorage.getItem("nombreniño");
let apellido = localStorage.getItem("apellidoniño");
let ratio = 0;
let TROFEOS = 0;
let valorpiel = 0;
let valorpelo = 0;
let valoranteojos = 0;

window.addEventListener("DOMContentLoaded", () => {
  valorpiel = localStorage.getItem("valorpiel");
  valorpelo = localStorage.getItem("valorpelo");
  valoranteojos = localStorage.getItem("valoranteojos");
  ratio = localStorage.getItem ("ratio");

  document.querySelector(`.colorcitos img[data-valor="${valorpiel}"]`).classList.add("visible");
  document.querySelector(`.cabellos img[data-valor="${valorpelo}"]`).classList.add("visible");
  document.querySelector(`.anteojosysol img[data-valor="${valoranteojos}"]`).classList.add("visible");

  actualizarDatosUsuario();
  actualizarAvatar();
});


function actualizarDatosUsuario () {
    document.getElementById("nombreyapellido").textContent = nombre + " " + apellido;
    document.getElementById("ratio").textContent = ratio;
    document.getElementById("trofeos").textContent = TROFEOS;
}

function actualizarAvatar () {
  document.querySelectorAll ("#colorcitos img").forEach(img => {
    if (parseInt (img.dataset.valor) === parseInt (valorpiel)) {
      img.classList.add ("visible");
    } else {
      img.classList.remove ("visible");
    }
});

document.querySelectorAll ("#anteojosysol img").forEach(img => {
    if (parseInt (img.dataset.valor) === parseInt (valoranteojos)) {
      img.classList.add ("visible");
    } else {
      img.classList.remove ("visible");
    }
});
document.querySelectorAll ("#cabellos img").forEach(img => {
    if (parseInt (img.dataset.valor) === parseInt (valorpelo)) {
      img.classList.add ("visible");
    } else {
      img.classList.remove ("visible");
    }
});
}
 
function datosUsuario() {
    postEvent ("UsuarioRegistrado", {
        NOMBREniño:nombre,
        APELLIDOniño:apellido
    },
    function (data) {
      console.log("Respuesta del servidor:", data);
      if (!data) return;
        nombre=data.NOMBREniño,
        apellido=data.APELLIDOniño,
        ratio=data.RATIO

        actualizarDatosUsuario();
        actualizarAvatar();
    }
)
}

datosUsuario();



