connect2Server();

let nombre = localStorage.getItem("nombreniño");
let apellido = localStorage.getItem("apellidoniño");
let ratio = 0;
let TROFEOS = 0;
let T1 = document.getElementById ("T1");
let T2 = document.getElementById ("T2");
let T3 = document.getElementById ("T3");
let T4 = document.getElementById ("T4");
let T5 = document.getElementById ("T5");
let T6 = document.getElementById ("T6");
let valorpiel = 0;
let valorpelo = 0;
let valoranteojos = 0;

function ocultartrofeos (){
  T1.style.display = "none";
  T2.style.display = "none";
  T3.style.display = "none";
  T4.style.display = "none";
  T5.style.display = "none";
  T6.style.display = "none";
}
ocultartrofeos ();

function mostrartrofeos (t1, t2, t3, t4, t5, t6){
  if (t1 == 1) T1.style.display = "block";
  if (t2 == 1) T2.style.display = "block";
  if (t3 == 1) T3.style.display = "block";
  if (t4 == 1) T4.style.display = "block";
  if (t5 == 1) T5.style.display = "block";
  if (t6 == 1) T6.style.display = "block";
}

window.addEventListener("DOMContentLoaded", () => {
  valorpiel = localStorage.getItem("valorpiel");
  valorpelo = localStorage.getItem("valorpelo");
  valoranteojos = localStorage.getItem("valoranteojos");
  ratio = localStorage.getItem ("ratio");

  document.querySelector(`#colorcitos img[data-valor="${valorpiel}"]`).classList.add("visible");
  document.querySelector(`#cabellos img[data-valor="${valorpelo}"]`).classList.add("visible");
  document.querySelector(`#anteojosysol img[data-valor="${valoranteojos}"]`).classList.add("visible");

  actualizarDatosUsuario();
  actualizarAvatar();
});


function actualizarDatosUsuario () {
    document.getElementById("nombreyapellido").textContent = "~" + " " + " " + nombre + " " + apellido;
    document.getElementById("ratio").textContent = "~  RATIO DE INSULINA:" + " " + ratio;
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
  postEvent ("trofeos", {
    NOMBREniño: nombre,
    APELLIDOniño: apellido
  },
  function (data) {
console.log("Valores individuales:", data.T1, data.T2, data.T3, data.T4, data.T5, data.T6);

    if (!data) return;
    mostrartrofeos (data.T1, data.T2, data.T3, data.T4, data.T5, data.T6)
  }
)
}

datosUsuario();



