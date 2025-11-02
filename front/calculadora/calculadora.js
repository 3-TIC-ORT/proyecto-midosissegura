connect2Server(3000);

const botonCalcular = document.querySelector("#botoncalcular");
const resultado = document.querySelector("#resultado");
const comidaelegida = document.querySelector("#inputcomida");
const cantidades = document.querySelector("#inputcantidad");
const grupocomidaelegida = document.querySelector("#grupocomidas");
const unidades = document.querySelector("#unidades");
localStorage.setItem("nombreniño", "Maxi")
localStorage.setItem("apellidoniño","Tabakman");

function calculardatos() {
  postEvent("Calculadora", 
    {
        NOMBRE: localStorage.getItem("nombreniño"),
    APELLIDO: localStorage.getItem("apellidoniño"),
      grupo: grupocomidaelegida.value,
      comida: comidaelegida.value,
      CANTIDAD: cantidades.value,
      unidad: unidades.value
    }, 
    function (data) {
      const respuesta = data;
      alert(`Calorías: ${respuesta} Kcal`);
      resultado.innerText = `Calorías: ${respuesta} Kcal`;
  });
}


botonCalcular.addEventListener("click", calculardatos);
