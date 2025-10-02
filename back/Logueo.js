import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; 
import fs from "fs";


var registro= JSON.parse(fs.readFileSync("Usuarios.json", "utf-8"))


var lista = registro


function Iniciar(gmail, contraseña, nombre, apellido)
{
    for (var i =0; i<registro.length;i++)
    {
        if (gmail === registro[i].GMAIL)
        {
            console.log ("Este correo ya está siendo utilizado por otra cuenta")
            var serepite = true
        }
    }
        if (serepite != true)
            {
            lista.push ({
                "NOMBRE": nombre ,
                "APELLIDO":apellido ,
                "GMAIL": gmail ,
                "CONTRASENA": contraseña
            })
            fs.writeFileSync('Usuarios.json', JSON.stringify(lista))
            console.log("Usuario registrado con éxito")
        }
       
}
export {Iniciar};

function Logueo(gmail, contraseña, nombre, apellido)
{

  for (var i =0; i<registro.length;i++)
    {
        if (gmail === registro[i].GMAIL && contraseña === registro[i].CONTRASENA && nombre === registro[i].NOMBRE && apellido === registro[i].APELLIDO)
        {
            console.log ("Has iniciado sesión con éxito")
            var encontrado = true
            var logueado = true
            break
        }
        else if (contraseña != registro[i].CONTRASENA && gmail === registro[i].GMAIL)
        {
            console.log ("La contraseña es incorrecta")
            var logueado = false
            var encontrado = true
            break
        }
        else if ((nombre != registro[i].NOMBRE || apellido != registro[i].APELLIDO) && (gmail === registro[i].GMAIL))
        {
            console.log ("Has ingresado mal tu nombre o apellido")
            var logueado = false
            var encontrado = true
            break
        }
        else if (gmail != registro[i].GMAIL)
        {
            encontrado = false
        }
    }
    if (encontrado != true)
    {
        console.log ("No se ha encontrado una cuenta con ese correo")
    }

    return [logueado,encontrado]
}
export {Logueo};

