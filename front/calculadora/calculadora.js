connect2Server();
const calcular = document.getElementById ("calcular");

const comidaelegida = document.querySelectorAll (".inputcomidaelegida");
const cantidades = document.querySelectorAll (".inputcantidad");
const grupocomidaelegida = document.querySelectorAll (".grupocomidaelegidas");
const cantidad = document.querySelectorAll (".cantidad");

fetch("../../back/comidaelegidas.json")
  .then(res => res.json())
  .then(comidaelegidasjson => {
      function seleccionUnidad (comidaelegidainput) {
          const convertir = comidaelegidainput.trim().toLowerCase();
          const match = comidaelegidasjson.find (item =>
            item.Alimento.trim().toLowerCase() === convertir
            );
            return match ? match.Unidad: "";
      };
    comidaelegida.forEach ((input, index) => {
        input.addEventListener ("input", () => {
            const comidita = input.value;
            const correspondienteU = seleccionUnidad (comidita);
            cantidad [index].value = correspondienteU;
        });
  });
  })
  .catch(err => console.error("Error al cargar comidaelegidas.json:", err));

const datos = [comidaelegida, cantidad, grupocomidaelegida, cantidad];
postEvent ("Calculadora", datos, (respuesta) => {
    if (respuesta.error) {
        alert ("Error");
    }
    else {
        alert (respuesta);
    };
})
