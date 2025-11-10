connect2Server();

const nombre = localStorage.getItem("nombreniño");
const apellido = localStorage.getItem("apellidoniño");
const rationiño = 0;

function datosUsuario() {
    postEvent ("UsuarioRegistrado", {
        NOMBREniño:nombre,
        APELLIDOniño:apellido
    },
    function (data) {
        nombre=data.NOMBREniño,
        apellido=data.APELLIDOniño,
        rationiño=data.RATIO
    }
)

function actualizarDatosUsuario () {
    document.getElementById("nombreyapellido").textContent = nombre + " " + apellido;
    document.getElementById("ratio").textContent = rationiño;
    document.getElementById("trofeos").textContent = TROFEOS;
}

actualizarDatosUsuario();
}

datosUsuario();

