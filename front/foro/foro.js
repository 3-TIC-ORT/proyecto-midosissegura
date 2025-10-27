let listacomentarios =[]
connect2Server(3000)
let mensajes =[]
let nombre=""
 localStorage.setItem("nombreusuario", "messi");
     localStorage.setItem("apellidousuario", "a");
const inputcomentario=document.getElementById("comentarioinput")
const agregarcomentario =document.getElementById("agregarcomentario")
const ulcomentarios=document.getElementById("comentarios")
agregarcomentario.addEventListener("click", function() {
    const comentario = inputcomentario.value;
    listacomentarios.push(comentario);
        inputcomentario.value=""
    for (let i = 0; i < listacomentarios.length; i++) {
    const li = document.createElement("li");
    li.textContent = listacomentarios[i];
    li.className="tipocomentario"
    ulcomentarios.appendChild(li);
 listacomentarios.innerHTML=""
 listacomentarios=[]

postEvent("GuardarMensaje", {
    NOMBRE: localStorage.getItem("nombreusuario"),
    APELLIDO: localStorage.getItem("apellidousuario"),
    Mensajenuevo:comentario
}, function(data) {
   mensajes = data.Mensaje;
   nombre = data.Autor;
   if(nombre==localStorage.getItem("nombreusuario") + localStorage.getItem("apellidousuario")){
    const li = document.createElement("li");
    li.textContent = mensajes;
    li.className="tipocomentario"
    ulcomentarios.appendChild(li);
   }
   else{
    const li = document.createElement("li");
    li.textContent = mensajes;
    li.className="tipocomentariootro"
    ulcomentarios.appendChild(li);
   }
});
}})
getEvent("darmensajesalforo", function(data) {
    for (let i = 0; i < data.length; i++) {
   mensajes = data[i].Mensaje;
   nombre = data[i].Autor;
   if(nombre==localStorage.getItem("nombreusuario") + localStorage.getItem("apellidousuario")){
    const li = document.createElement("li");
    li.textContent = mensajes;
    li.className="tipocomentario"
    ulcomentarios.appendChild(li);
   }
   else{
    const li = document.createElement("li");
    li.textContent = mensajes;
    li.className="tipocomentariootro"
    ulcomentarios.appendChild(li);
   }}
});
let btnatras = document.getElementById("btnatras");
btnatras.addEventListener("click", function () {
  window.location.href = "";
});



