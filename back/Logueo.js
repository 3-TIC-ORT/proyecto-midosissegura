import fs from "fs";

var packagejson = JSON.parse(fs.readFileSync('back/package.json', 'UTF-8'));
var Usuario = packagejson.Usuarios
console.log(Usuario)

function Loguear()
{
    var sesion= document.getElementById('sesion').value
    var contraseña = document.getElementById ('contraseña').value

    for (var i = 0; i< Usuario.length;i++)
    {
        if (sesion == Usuario[i].sesion && contraseña == Usuario[i].contraseña)
    {
            console.log (sesion + "se registró. ")
    }
    else 
    {
        console.log("El nombre de usuario y la contraseña no coinciden.")
    }

}   
}



