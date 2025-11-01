connect2Server(3000);

const calcular = document.getElementById ("calcular");
const resultado = document.querySelectorAll ("#resultado");
const comidaelegida = document.querySelectorAll ("#inputcomidaelegida");
const cantidades = document.querySelectorAll ("#inputcantidad");
const grupocomidaelegida = document.querySelectorAll ("#grupocomidaelegidas");
const unidades = document.querySelectorAll ("#cantidad");
const botoncalcular = document.getElementById ("botoncalcular");

function calculardatos () {

    postEvent ("Calculadora", 
        {
        grupo: grupocomidaelegida.value,
        comida: comidaelegida.value,
        cantidad: cantidades.value,
        unidad:  parseFloat(unidades.value)     
        }, function (data) {
    const respuesta = data;
    resultado.innerText = `Calorías: ${respuesta} Kcal;`
})
};

comidaelegida.forEach ((input, index) => {
    input.addEventListener ("input", () => {
        const comidita = input.value;
        const correspondienteU = seleccionUnidad (comidita);
        cantidad [index].value = correspondienteU;
    });
});

botoncalcular.addEventListener ("click", calculardatos);