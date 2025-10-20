import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; 
import fs from "fs";

var registro= JSON.parse(fs.readFileSync("Usuarios.json", "utf-8"))

var lista = registro
var UsuarioR = null
var NiñoR= null
function Iniciar(data)
{
    for (var i =0; i<registro.length;i++)
    {
        if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO)
        {
            console.log ("Este usuario ya existe")
            var cuentacreada = false
        } else if (isNaN(data.BOLO) /*Contiene letras*/)
        {
            console.log ("El bolo debe ser un número")
            var cuentacreada = false
        } else if (/\d/.test(data.NOMBREniño) /*Contiene números*/)
        {
            console.log ("El nombre del niño no puede contener números")
            var cuentacreada = false
        } else if (/\d/.test(data.NOMBRE) /*Contiene números*/)
        {
            console.log ("El nombre no puede contener números")
            var cuentacreada = false
        }
        else if (/\d/.test(data.APELLIDO) /*Contiene números*/)
        {
                console.log ("El apellido no puede contener números")
                var cuentacreada = false
        }
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
        return cuentacreada
       
}
export {Iniciar};
function LogueoAdultos(data)
{

  for (var i =0; i<registro.length;i++)
    {
        if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO && data.CONTRASENA === registro[i].CONTRASENA)
        {
            console.log ("Has iniciado sesión correctamente")
            var encontrado = true
            var logueado = true
            var contra=true 
            UsuarioR = registro[i] 
        } else if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO && data.CONTRASENA != registro[i].CONTRASENA)
        {
            console.log ("La contraseña es incorrecta")
            var encontrado = true
            var logueado = false
            var contra=false
        } else if (data.NOMBRE != registro[i].NOMBRE || data.APELLIDO != registro[i].APELLIDO)
        {
            var encontrado = false
            var logueado = false
            console.log ("No se ha encontrado una cuenta con ese nombre y apellido")
            var contra=false
        }
  
    }

  return [logueado,encontrado,contra, UsuarioR];
}
export {LogueoAdultos};

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

export {AñadirTrofeo};

function Comidas()
{
    var comidas = JSON.parse(fs.readFileSync("Comidas.json", "utf-8"))
    return comidas
}
export {Comidas}

function UsuarioRegistrado(){
    return [UsuarioR.NOMBRE, UsuarioR.APELLIDO, UsuarioR.CONTRASENA, UsuarioR.T1,UsuarioR.T2,UsuarioR.T3,UsuarioR.T4,UsuarioR.T5,UsuarioR.T6, UsuarioR.BOLO, UsuarioR.NOMBREniño, UsuarioR.CONTRASENAniño]
}
export {UsuarioRegistrado}
function Calculadora(data){
    var Elección = data.comidaelegida
    var carbohidratos = comidas.Elección
    var resultado = UsuarioR.BOLO * data.gramos / carbohidratos
    return resultado
}
export {Calculadora}

function LogueoNiños(data) {
  for (var i = 0; i < registro.length; i++) {
  
    if (data.NOMBREniño === registro[i].NOMBREniño && data.CONTRASENAniño === registro[i].CONTRASENAniño) {
        console.log("Has iniciado sesión correctamente")
        var logueado = true
        var encontrado = true
        var contra = true
        NiñoR = registro[i]
    }
    else if (data.NOMBREniño === registro[i].NOMBREniño && data.CONTRASENAniño !== registro[i].CONTRASENAniño) {
        console.log("La contraseña es incorrecta")
        var logueado = false
        var encontrado = true
        var contra = false
    } else if (data.NOMBREniño !== registro[i].NOMBREniño) {
        console.log("No se ha encontrado una cuenta con ese nombre")
        var logueado = false
        var encontrado = false
        var contra = false
    }
}
return [logueado, encontrado, contra, NiñoR];
}
export{LogueoNiños};

function NiñoRegistrado(){
return [NiñoR.CONTRASENAniño, NiñoR.NOMBREniño]
}
export {NiñoRegistrado}