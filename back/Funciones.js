import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; 
import fs from "fs";
startServer(3000);

var registro= JSON.parse(fs.readFileSync("Usuarios.json", "utf-8"))
subscribePOSTEvent("iniciarsesion", Logueo);
var lista = registro


function Iniciar(data)
{
    for (var i =0; i<registro.length;i++)
    {
        if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO)
        {
            console.log ("Este usuario ya existe")
            var cuentacreada = false
        } else if (data.BOLO /*contiene números*/)
    }
        if (cuentacreada === true)
            {
            lista.push ({
                "NOMBRE": data.NOMBRE ,
                "APELLIDO": data.APELLIDO ,
                "CONTRASENA": data.CONTRASENA ,
                "T1": false,
                "T2": false,
                "T3": false,
                "T4": false,
                "T5": false,
                "T6": false,
                "Bolo" : data.BOLO,
                "NOMBREniño": data.NOMBREniño,
                "CONTRASENAniño": data.CONTRASENAniño
            })
            fs.writeFileSync('Usuarios.json', JSON.stringify(lista, null, 2))
            console.log("Usuario registrado con éxito")
        }
       
}
export {Iniciar};
function Logueo(data)
{

  for (var i =0; i<registro.length;i++)
    {
        if (data.GMAIL === registro[i].GMAIL && data.CONTRASENA === registro[i].CONTRASENA && data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO)
        {
            console.log ("Has iniciado sesión con éxito")
            var encontrado = true
            var logueado = true
            var contra=true
            var UsuarioR = registro[i]
            break
        }
        else if (data.CONTRASENA != registro[i].CONTRASENA && data.GMAIL === registro[i].GMAIL)
        {
            console.log ("La contraseña es incorrecta")
            var logueado = false
            var encontrado = true
            var contra=false
            break
        }
        else if ((data.NOMBRE != registro[i].NOMBRE || data.APELLIDO != registro[i].APELLIDO) && (data.GMAIL === registro[i].GMAIL))
        {
            console.log ("Has ingresado mal tu nombre o apellido")
            var logueado = false
            var encontrado = true
            var contra=true
            break
        }
        else if (data.GMAIL != registro[i].GMAIL)
        {
            encontrado = false
        }
    }
    if (encontrado != true)
    {
        console.log ("No se ha encontrado una cuenta con ese correo")
        var logueado = false
        var contra=false
    }


  return [logueado,encontrado,contra, UsuarioR];
}
export {Logueo};

function AñadirTrofeo(data)
{
    if (data.T1 === true)
    {
        for (var i = 0; i < lista.length; i++)
        {
            if (data.GMAIL === lista[i].GMAIL)
            {
                lista[i].T1 = true
            }
        }
    }

    if (data.T2 === true)
    {
        for (var i = 0; i < lista.length; i++)
        {
            if (data.GMAIL === lista[i].GMAIL)
            {
                lista[i].T2 = true
            }
        }
    }
    if (data.T3 === true)
    {
        for (var i = 0; i < lista.length; i++)
        {
            if (data.GMAIL === lista[i].GMAIL)
            {
                lista[i].T3 = true
            }
        }
    }
    if (data.T4 === true)
    {
        for (var i = 0; i < lista.length; i++)
        {
            if (data.GMAIL === lista[i].GMAIL)
            {
                lista[i].T4 = true
            }
        }
    }
    if (data.T5 === true)
    {
        for (var i = 0; i < lista.length; i++)
        {
            if (data.GMAIL === lista[i].GMAIL)
            {
                lista[i].T5 = true
            }
        }
    }
    if (data.T6 === true)
    {
        for (var i = 0; i < lista.length; i++)
        {
            if (data.GMAIL === lista[i].GMAIL)
            {
                lista[i].T6 = true
            }
        }
    }
    if (data.T7 === true)
    {
        for (var i = 0; i < lista.length; i++)
        {
            if (data.GMAIL === lista[i].GMAIL)
            {
                lista[i].T7 = true
            }
        }
    }


    fs.writeFileSync("Usuarios.json",JSON.stringify(lista, null, 2))
    
}
function Usuarior (){
    
}
export {AñadirTrofeo};
