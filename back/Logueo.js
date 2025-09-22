import fs from "fs";

var packagejson = JSON.parse(fs.readFileSync('Usuarios.json', 'utf-8'));
var Usuario = packagejson.Usuarios
console.log(Usuario)

var registro=[
    {
        NOMBRE:"",
        CONTRASEÑA:"",
        GMAIL:"",
        APELLIDO:""
    }
]


function Iniciar()
{
    var nombre = document.getElementById('nombre').value
    var contraseña = document.getElementById('contraseña').value
    var gmail = document.getElementById('gmail').value
    var apellido = document.getElementById('apellido').value

    for (var i =0; i<Usuario.length;i++)
    {
        if (gmail == Usuario[i].gmail)
        {
            alert ("Este correo ya está siendo utilizado por otra cuenta")
        }

        else {
            registro.push ({
                NOMBRE:nombre,
                CONTRASEÑA:contraseña,
                GMAIL:gmail,
                APELLIDO:apellido
            })
            fs.writeFileSync('Usuarios.json', JSON.stringify(registro))
            console.log("Usuario registrado con éxito")
        }
    }
}


