connect2Server(3000);

const calcular = document.getElementById ("calcular");
const resultado = dpcument.querySelectorAll ("#resultado");
const comidaelegida = document.querySelectorAll ("#inputcomidaelegida");
const cantidades = document.querySelectorAll ("#inputcantidad");
const grupocomidaelegida = document.querySelectorAll ("#grupocomidaelegidas");
const unidades = document.querySelectorAll ("#cantidad");
const botoncalcular = document.querySelectorAll ("#botoncalcular");

function calcular () {
    const enviar = {
        grupo: grupocomidaelegida.value,
        comida: comidaelegida.value,
        cantidad: cantidades.value,
        unidad: unidades.value
    }
};

comidaelegida.forEach ((input, index) => {
    input.addEventListener ("input", () => {
        const comidita = input.value;
        const correspondienteU = seleccionUnidad (comidita);
        cantidad [index].value = correspondienteU;
    });
});

postEvent ("Calculadora", enviar, (respuesta) => {
    resultado.innerText = "APLICA ${respuesta.resultado} U.";
})

botoncalcular.addEventListener ("click", calcular);