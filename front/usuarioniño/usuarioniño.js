connect2Server();

function datosUsuario() {
    NOMBREyAPELLIDO = localStorage.getItem("nombreniño") + " " + localStorage.getItem("apellidoniño");
    RATIO = "";
    EDAD = "";
    TROFEOS = "";

    document.getElementById("nombreyapellido").textContent = NOMBREyAPELLIDO;
    document.getElementById("ratio").textContent = RATIO;
    document.getElementById("edad").textContent = EDAD;
    document.getElementById("trofeos").textContent = TROFEOS;
}

datosUsuario();

