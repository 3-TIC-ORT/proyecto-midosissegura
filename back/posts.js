import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; 
import fs from "fs";
import { Iniciar } from "./Logueo.js";
import { Logueo } from "./Logueo.js";
subscribePOSTEvent ("logueo", Logueo);
subscribePOSTEvent ("registro", Iniciar);
startServer()