connect2Server();
const calcular = document.getElementById ("calcular");
calcular.addEventListener ("click", function () {
    alert ("Calcular")
})

const comida = document.getElementById ("inputcomida");
const cantidad = document.getElementById ("inputcantidad");
const grupocomida = document.getElementById ("grupocomidas");
const unidad = document.getElementById ("unidades");


if (comida === "img1") comidaCarbohidratos = carbos1;
if (comida === "img2") comidaCarbohidratos = carbos2;
if (comida === "img3") comidaCarbohidratos = carbos3;
if (comida === "img4") comidaCarbohidratos = carbos4;
if (comida === "img5") comidaCarbohidratos = carbos5;
if (comida === "img6") comidaCarbohidratos = carbos6;
if (comida === "img7") comidaCarbohidratos = carbos7;
if (comida === "img8") comidaCarbohidratos = carbos8;

const datos = [comida, cantidad, grupocomida, unidad];
postEvent ("calculadora", datos, (respuesta) => {
    if (respuesta.error) {
        alert ("Error");
    }
    else {
        alert (respuesta);
    }
})