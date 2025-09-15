let listacomentarios =[]
const inputcomentario=document.getElementById("comentarioinput")
const agregarcomentario =document.getElementById("agregarcomentario")
const ulcomentarios=document.getElementById("comentarios")
agregarcomentario.addEventListener("click", function() {
    const comentario = inputcomentario.value;
    listacomentarios.push(comentario);
    const li = document.createElement("li");
    inputcomentario.value=""
    li.textContent = listacomentarios[i];
    ulcomentarios.appendChild(li);
 listacomentarios.innerHTML=""
})


