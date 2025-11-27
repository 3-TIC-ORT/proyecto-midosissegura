// Importamos la librería express
import express from "express";
import { Iniciar } from "../back/Funciones.js";
import { InicioNiños } from "../back/Funciones.js";

// Creamos el servidor de Express con la configuración estándar básica
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    // Esto envía el texto "Hello World!" como respuesta a la HTTP request
    res.send("Male");
});
app.post("/register", (req, res) => {
    console.log(req.body);
    // Esto envía el texto "Hello World!" como respuesta a la HTTP request
    res.send("Maxi");
});

// Iniciamos el servidor en el puerto 3000
app.listen(8080, () => {
    console.log("Example app listening on port 3000!");
});
app.post("/login", (req, res) => {
    let logueado = Iniciar(req.body);
    res.send(logueado);
});
app.post("/registernenes", (req, res) => {
    let funciono =InicioNiños(req.body);
    res.send(funciono);
});