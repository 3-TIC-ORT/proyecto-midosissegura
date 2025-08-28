const paso1 = document.getElementById ("PASO 1");
const paso2 = document.getElementById ("PASO 2");
const paso3 = document.getElementById ("PASO 3");
const paso4 = document.getElementById ("PASO 4");
const paso5 = document.getElementById ("PASO 5");
const paso6 = document.getElementById ("PASO 6");
const paso7 = document.getElementById ("PASO 7");

function click(event) {
    const paso1 = event.target.id;
}
paso1.addEventListener ("click", click);
paso2.addEventListener ("click", click);