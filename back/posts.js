import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; 
import fs from "fs";
/*import {AñadirTrofeo} from "./Funciones.js";
import{Iniciar} from "./Funciones.js";
import {LogueoAdultos} from "./Funciones.js";


subscribePOSTEvent ("logueo", LogueoAdultos);
subscribePOSTEvent ("registro", Iniciar);
subscribePOSTEvent ("trofeos", AñadirTrofeo);*/
import {usuarior} from "./Funciones.js"

startServer(3001)
subscribePOSTEvent("usuarior",usuarior)