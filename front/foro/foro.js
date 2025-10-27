let listacomentarios =[]
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
}})
ulcomentarios.textContent=localStorage.getItem("nombreusuario") + " ha entrado al foro."