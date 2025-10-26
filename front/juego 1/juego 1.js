const lineas = document.getElementById ("lineas");
const ctx = lineas.getContext ("2d");
let azul = null;
let img1 = document.getElementById ("img1");
let img2 = document.getElementById ("img2");
let img3 = document.getElementById ("img3");
const botonesazules = document.querySelectorAll ("botonesazules");
const botonesrojos = document.querySelectorAll ("botonesrojos");
let numero = 0;
function cambiarnm (){
numero= Math.random ();
if (numero <=0.33){
img1.classList.remove ("display");
img2.classList.add ("display");
img3.classList.add ("display");
}
else if (numero >0.33 && numero <=0.66){
img2.classList.remove ("display");
img1.classList.add ("display");
img3.classList.add ("display");
}
else {
img3.classList.remove ("display");
img1.classList.add ("display");
img2.classList.add ("display");}
}

cambiarnm ();