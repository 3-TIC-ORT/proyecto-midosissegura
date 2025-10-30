connect2Server();
const calcular = document.getElementById ("calcular");
calcular.addEventListener ("click", function () {
    alert ("Calcular")
})

const comida = document.getElementById ("inputcomida");
const cantidad = document.getElementById ("inputcantidad");
const grupocomida = document.getElementById ("grupocomidas");
const unidades = document.getElementById ("unidades");

const unidad = document.getElementById ("unidad");
const cucharada = document.getElementById ("cucharada");
const pocillo = document.getElementById ("pocillo");
const taza = document.getElementById ("taza");
const vaso = document.getElementById ("vaso");
const rodaja = document.getElementById ("rodaja");
const lamina = document.getElementById ("lamina");
const paquete = document.getElementById ("paquete");
const plato = document.getElementById ("plato");
const gramos = document.getElementById ("gramos");
const compotera = document.getElementById ("compotera");


const unidadesparacomidas = {
    "papa": unidad,
    "choclo-en-grano": taza,
    "choclo-entero": "carbos3",
    "mandioca": "carbos4",
    "batata": "carbos5",
    "pure-de-batata": "carbos6",
    "pure-de-papa": "carbos7",
    "pure-instantaneo": "carbos8",
    "calabaza": "carbos9",
    "zapallo": "carbos10",
    "palta": "carbos11",
    "remolacha": "carbos12",
    "zanahoria": "carbos13",
    "anana": "carbos14",
    "banana": "carbos15",
    "cerezas": "carbos16",
    "ciruelas": "carbos17",
    "damascos": "carbos18",
    "duraznos": "carbos19",
    "frutillas": "carbos20",
    "granada": "carbos21",
    "melon": "carbos22",
    "mandarina": "carbos23",
    "mango": "carbos24",
    "manzana": "carbos25",
    "moras": "carbos26",
    "naranja": "carbos27",
    "peras": "carbos28",
    "pomelo": "carbos29",
    "sandia": "carbos30",
    "uvas": "carbos31",
    "kiwi": "carbos32",
    "higos": "carbos33",
    "kinotos": "carbos34",
    "frambuesas": "carbos35",
    "manzanas": "carbos36",
    "pasas-de-uva": "carbos37",
    "frutas-secas": "carbos38",
    "pure-de-manzana": "carbos39",
    "anana-en-lata-dietetico": "carbos40",
    "coctel-de-frutas-dietetico": "carbos41",
    "duraznos-en-lata-dieteticos": "carbos42",
    "avena-cocida": "carbos43",
    "almidon-de-maiz": "carbos44",
    "harina-de-mandioca": "carbos45",
    "arroz-blanco": "carbos46",
    "arroz-integral": "carbos47",
    "canellones": "carbos48",
    "panqueque": "carbos49",
    "noquis": "carbos50",
    "noquis-de-semola": "carbos51",
    "pastas-cocidas": "carbos52",
    "ravioles": "carbos53",
    "capellettini": "carbos54",
    "lamina-de-lasagna": "carbos55",
    "lentejas": "carbos56",
    "porotos": "carbos57",
    "garbanzos": "carbos58",
    "milanesa-de-soja": "carbos59",
    "habas-cocidas": "carbos60",
    "pan-blanco": "carbos61",
    "pan-integral": "carbos62",
    "pan-de-hamburguesa": "carbos63",
    "pan-arabe": "carbos64",
    "sandwich-de-miga": "carbos65",
    "tortilla-de-maiz": "carbos66",
    "pan-de-salvado": "carbos67",
    "pan-de-pancho": "carbos68",
    "pan-de-fajitas": "carbos69",
    "pan-frances-en-rodajas": "carbos70",
    "pan-pebete": "carbos71",
    "barra-de-cereal": "carbos72",
    "copitos-azucarados": "carbos73",
    "copos-de-maiz": "carbos74",
    "granola": "carbos75",
    "pochoclo-dulce": "carbos76",
    "pochoclo-salado": "carbos77",
    "cuadraditos-de-avena": "carbos78",
    "galleta-de-agua": "carbos79",
}


const datos = [comida, cantidad, grupocomida, unidades];
postEvent ("calculadora", datos, (respuesta) => {
    if (respuesta.error) {
        alert ("Error");
    }
    else {
        alert (respuesta);
    }
})