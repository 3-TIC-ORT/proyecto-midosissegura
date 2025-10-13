import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; 
import fs from "fs";
import { AñadirTrofeo, Iniciar } from "./Logueo.js";
import { Logueo } from "./Logueo.js";
subscribePOSTEvent ("logueo", Logueo);
subscribePOSTEvent ("registro", Iniciar);
subscribePOSTEvent ("trofeos", AñadirTrofeo);
startServer()