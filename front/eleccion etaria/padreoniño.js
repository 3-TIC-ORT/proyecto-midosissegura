let padre = document.getElementById("padre");
let niño = document.getElementById("niño");
let btnatras = document.getElementById("btnatras");

btnatras.addEventListener("click", function() {
    window.location.href = "../pagina1/paginauno.html";
});

padre.addEventListener("click", function() {
    window.location.href = "../main/main_html_front.html";
});
niño.addEventListener("click", function() {
    window.location.href = "../iniciodesesion/iniciodesesion.html";
});