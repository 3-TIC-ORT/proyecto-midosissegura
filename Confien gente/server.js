var express = require('express');
var app = express();
var bcrypt = require('bcrypt');

app.use(express.json());

var Usuarios = []

app.get('/Usuarios', (req, res) => {
    res.json(Usuarios);
})

app.post('/Usuarios', async (req, res) => {
    try {
   var sal = await bcrypt.genSalt()
   var contraseñaencriptada = await bcrypt.hash(req.body.contraseña, sal)
       var usuario = {contraseña: contraseñaencriptada, nombre: req.body.nombre}
    Usuarios.push(usuario)
    res.status(201).send()
    } catch {
        res.status(500).send()
    }
})
app.post('/Usuarios/login', async (req, res) => {
   var usuario = Usuarios.find(usuario => usuario.nombre == req.body.nombre)
   if (usuario == null) {
    return res.status(400).send('No se puede encontrar el usuario')
   }
   try {
if (await bcrypt.compare(req.body.contraseña, usuario.contraseña))
{
    res.send('Exito')
} else {
    res.send('No autorizado')}
   } catch { 
    res.status(500).send()
   }
})

app.listen(4000)