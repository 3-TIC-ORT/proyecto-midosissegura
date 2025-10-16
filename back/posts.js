import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; 
import fs from "fs";
import {AñadirTrofeo} from "./Logueo.js";
import{Iniciar} from "./Registro.js";
import {LogueoAdultos} from "./Funciones.js";
subscribePOSTEvent ("logueo", LogueoAdultos);
subscribePOSTEvent ("registro", Iniciar);
subscribePOSTEvent ("trofeos", AñadirTrofeo);
startServer()