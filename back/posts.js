import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; 
import fs from "fs";
import {AñadirTrofeo} from "./Funciones.js";
import{Iniciar} from "./Funciones.js";
import {LogueoAdultos} from "./Funciones.js";
import {Comidas} from "./Funciones.js";
import {UsuarioRegistrado} from "./Funciones.js";
import {Calculadora} from "./Funciones.js";
import {LogueoNiños} from "./Funciones.js"
import {NiñoRegistrado} from "./Funciones.js"
subscribePOSTEvent ("iniciarsesion", LogueoAdultos);
subscribePOSTEvent ("registro", Iniciar);
subscribePOSTEvent ("trofeos", AñadirTrofeo);
subscribePOSTEvent ("Comidas", Comidas)
subscribePOSTEvent ("UsuarioRegistrado", UsuarioRegistrado)
subscribePOSTEvent ("Calculadora", Calculadora)
subscribePOSTEvent ("LogueoNiños", LogueoNiños)
subscribePOSTEvent ("NiñoRegistrado", NiñoRegistrado)
startServer()
