// Importamos la librería express
import express from "express";
import { Iniciar } from "../back/funcionesexpress.js";
import { InicioNiños } from "../back/funcionesexpress.js";
import { LogueoAdultos } from "../back/funcionesexpress.js";
import { LogueoNiños } from "../back/funcionesexpress.js";
import { Calculadora } from "../back/funcionesexpress.js";
// Creamos el servidor de Express con la configuración estándar básica
const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
//registro
app.post("/registrop", (req, res) => {
    let logueado = Iniciar(req.body);
    res.send(logueado);
});
app.post("/registernenes", (req, res) => {
    let funciono =InicioNiños(req.body);
    res.send(funciono);
});
//login
app.post("/loginadultos", (req, res) => {
    let logueado = LogueoAdultos(req.body);
    res.send(logueado);
});
app.post("/loginnenes", (req, res) => {
    let funciono =LogueoNiños(req.body);
    res.send(funciono);
});
//calculadora
app.post("/calculadora", (req, res) => {
    let funciono =Calculadora(req.body);
    res.send(funciono);
});