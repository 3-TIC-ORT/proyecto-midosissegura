const app = express();
app.use(express.json());
import express from "express";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; 
import cors from "cors";
app.use(cors());

app.use(cors());
app.use(express.json());
import path from "path";
import { Iniciar } from "../back/funcionesexpress.js";
import { InicioNiños } from "../back/funcionesexpress.js";
import { LogueoAdultos } from "../back/funcionesexpress.js";
import { LogueoNiños } from "../back/funcionesexpress.js";
import { Calculadora } from "../back/funcionesexpress.js";
import { darmensajesalforo } from "../back/funcionesexpress.js";
import { AñadirTrofeo } from "../back/funcionesexpress.js";
import { Guardarmensajesdelforo } from "../back/funcionesexpress.js";
import { recargarratio } from "../back/funcionesexpress.js";
import { recargardosis } from "../back/funcionesexpress.js";
import { Fecha } from "../back/funcionesexpress.js";
import { mostrartrofeos } from "../back/funcionesexpress.js";
import{UsuarioRegistrado} from "../back/funcionesexpress.js";

// Asociamos la ruta "/" a la función pasada como segundo parámetr

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "front", "pagina1", "paginauno.html"));
});
app.post("/mostrartrofeos", (req, res) => {
    let funciono =mostrartrofeos(req.body);
    res.json(funciono);
});
//registro
app.post("/registrop", (req, res) => {
    let logueado = Iniciar(req.body);
    res.json(logueado);
});
app.post("/registernenes", (req, res) => {
    let funciono =InicioNiños(req.body);
    res.json(funciono);
});
//UsuarioRegistrado
app.post("/UsuarioRegistrado", (req, res) => {
    let funciono = UsuarioRegistrado(req.body);
    res.json(funciono);
});

//login
app.post("/loginadultos", (req, res) => {
    let logueado = LogueoAdultos(req.body);
    res.json(logueado);
});
app.post("/loginnenes", (req, res) => {
    let funciono =LogueoNiños(req.body);
    res.json(funciono);
});
//calculadora
app.post("/calculadora", (req, res) => {
    let funciono =Calculadora(req.body);
    res.json(funciono);
});
//foro
app.get("/darmensajesalforo", (req, res) => {
    let funciono =darmensajesalforo();
    res.json(funciono);
});
app.post("/Guardarmensajesdelforo", (req, res) => {
    let funciono =Guardarmensajesdelforo(req.body);
    res.json(funciono);
});
//trofeos
app.post("/trofeos", (req, res) => {
    let funciono =AñadirTrofeo(req.body);
    res.json(funciono);
});
//ratio
app.post("/ActualizarRatio", (req, res) => {
    let funciono =recargarratio(req.body);
    res.json(funciono);
});
//dosis
app.post("/ActualizarDosis", (req, res) => {
    let funciono =recargardosis(req.body);
    res.json(funciono);
});
//fecha
app.get("/horario", (req, res) => {
    let fechaactual = Fecha();
    res.json({ horario: fechaactual });
});

app.listen(3000, () => {          // 👈 AGREGÁ ESTO
    console.log("Servidor corriendo en puerto 3000 🚀");
});

app.use(express.static(path.join(process.cwd(), "front")));