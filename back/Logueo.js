import fs from "fs";

var packagejson = JSON.parse(fs.readFileSync('back/package.json', 'UTF-8'));
var Usuario = packagejson.Usuarios
console.log(Usuario)

function Loguear()
{
    var nombre= document.getElementById('nombre').value
    var contraseña = document.getElementById ('contraseña').value
    var apellido = document.getElementById('apellido').value
    var gmail = document.getElementById('gmail').value

    for (var i = 0; i< Usuario.length;i++)
    {
        if (nombre == Usuario[i].nombre && contraseña == Usuario[i].contraseña && apellido == Usuario[i].apellido && gmail == Usuario[i].gmail)
    {
            console.log (sesion + "se registró. ")
            window.location.href = 'https://google.com/';
            return
    }
    }
    console.log("El nombre de usuario y la contraseña no coinciden.")
}   



