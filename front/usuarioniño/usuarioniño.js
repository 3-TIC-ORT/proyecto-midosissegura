connect2Server();

function datosUsuario() {
    const nombre = localStorage.getItem("nombreniño");
    const apellido = localStorage.getItem("apellidoniño");

    postEvent ("UsuarioRegistrado", {}, function(response) {
        if (response.success) {
            actualizarDatosUsuario(response.data);
        } else {
            console.error("Error al obtener los datos del usuario:", response.message);
        }
    });

    document.getElementById("nombreyapellido").textContent = nombre + " " + apellido;
    document.getElementById("ratio").textContent = data.RATIO;
    document.getElementById("trofeos").textContent = TROFEOS;
}

datosUsuario();

