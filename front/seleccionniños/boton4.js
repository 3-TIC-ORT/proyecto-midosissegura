      connect2Server()
     
const cuarto1 = document.getElementById("1cuarto");
const cuarto2 = document.getElementById("2cuarto");
const cuarto3 = document.getElementById("3cuarto");
const cuarto4 = document.getElementById("4cuarto");
const cuarto5 = document.getElementById("5cuarto");
const cuarto6 = document.getElementById("6cuarto");
const cuarto7 = document.getElementById("7cuarto");
const volveratras = document.getElementById("volveratras")
let atras4 = document.getElementById ("atras");
let seguir4 = document.getElementById ("seguir");

let indice4 = 0;
volveratras.addEventListener("click", function () {
    let apellido=localStorage.getItem ("apellidoniño");
    let nombre=localStorage.getItem ("nombreniño");
    postEvent("trofeos",{
        T4: true,
        NOMBREniño:nombre,
  APELLIDOniño:apellido
         },function(data){
        console.log(data)
      }
      )
    window.location.href = "seleccionniños.html";
  });
const imagenescuarto = document.querySelectorAll (".imagenescuarto img");
   atras4.style.display= "none"
        cuarto2.style.display= "none"
    cuarto3.style.display= "none"
    cuarto4.style.display= "none"
    cuarto5.style.display= "none"
    cuarto6.style.display= "none"
    cuarto7.style.display= "none"
function paginasmostrar () {
    
    imagenescuarto.forEach((pagina, i) => {
        pagina.style.display = (i === indice4) ? `block` : `none`;
    });

    if (indice4 === 0) {
        atras4.style.display= "none"
    }
    else {
        atras4.style.display= "block"
    }

    if (indice4 === imagenescuarto.length - 1){
        seguir4.style.display = "none"
    }
    else {
        seguir4.style.display = "block"
     
    }
}

    atras4.addEventListener ("click", () => {
    indice4--;
    if (indice4<0) indice4 = 0;
    paginasmostrar ();
})

    seguir4.addEventListener ("click", () => {
   
    indice4 ++;
    if (indice4 > imagenescuarto.length) indice4 = imagenescuarto.length - 1;
    paginasmostrar ();
})



