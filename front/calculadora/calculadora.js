connect2Server();
const calcular = document.getElementById ("calcular");

const comida = document.querySelectorAll (".inputcomida");
const cantidad = document.querySelectorAll (".inputcantidad");
const grupocomida = document.querySelectorAll (".grupocomidas");
const unidades = document.querySelectorAll (".unidades");

fetch("back/Comidas.json")
  .then(res => res.json())
  .then(comidasjson => {
      function seleccionUnidad (comidainput) {
          const convertir = comidainput.trim().toLowerCase();
          const match = comidasjson.find (item =>
            item.Alimento.trim().toLowerCase() === convertir
            );
            return match ? match.Unidad: "";
      };
    comida.forEach ((input, index) => {
        input.addEventListener ("input", () => {
            const comidita = input.value;
            const correspondienteU = seleccionUnidad (comidita);
            unidades [index].value = correspondienteU;
        });
  });
  })

const datos = [comida, cantidad, grupocomida, unidades];
postEvent ("calculadora", datos, (respuesta) => {
    if (respuesta.error) {
        alert ("Error");
    }
    else {
        alert (respuesta);
    };
})

.catch(err => console.error("Error al cargar Comidas.json:", err));