import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; 
import fs from "fs";

var registro= JSON.parse(fs.readFileSync("Usuarios.json", "utf-8"))
let mensajes = JSON.parse(fs.readFileSync("Mensajes.json", "utf-8"))
let comidas = JSON.parse(fs.readFileSync("Comidas.json", "utf-8"))
var lista = registro
var logueado = null
var contra = null
var encontrado = null
var UsuarioR = null
let cuentacreada = null
var NiñoR= null
let Mensajenuevo= null
function Iniciar(data)
{
    for (var i =0; i<registro.length;i++)
    {
        if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO)
        {
            console.log ("Este usuario ya existe")
            cuentacreada = false
        } else if (isNaN(data.RATIO) /*Contiene letras*/)
        {
            console.log ("El radio debe ser un número")
            cuentacreada = false
        } else if (/\d/.test(data.NOMBREniño) /*Contiene números*/)
        {
            console.log ("El nombre del niño no puede contener números")
            cuentacreada = false
        } else if (/\d/.test(data.NOMBRE) /*Contiene números*/)
        {
            console.log ("El nombre no puede contener números")
            cuentacreada = false
        }
        else if (/\d/.test(data.APELLIDO) /*Contiene números*/)
        {
                console.log ("El apellido no puede contener números")
                cuentacreada = false
        }else if (isNaN(data.DOSIS))
        {
            cuentacreada = false
            console.log ("La dosis debe ser un número")
        } else if (data.APELLIDO === null || data.NOMBRE === null || data.CONTRASENA === null || data.NOMBREniño === null || data.APELLIDOniño === null)
        {
            cuentacreada = false
        }
        else {
            cuentacreada = true
        }
        //poner que el nombre, el apellido y la contraseña tengan que tener minimo un caracter
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
                "DOSIS": data.DOSIS,
                "RATIO": data.RATIO,
                "NOMBREniño": data.NOMBREniño,
                "APELLIDOniño": data.APELLIDOniño ,
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
            encontrado = true
            logueado = true
            contra=true 
            UsuarioR = registro[i] 
            break
        } else if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO && data.CONTRASENA != registro[i].CONTRASENA)
        {
            console.log ("La contraseña es incorrecta")
            encontrado = true
            logueado = false
            contra=false
        } else if (data.NOMBRE != registro[i].NOMBRE || data.APELLIDO != registro[i].APELLIDO)
        {
            encontrado = false
            logueado = false
            console.log ("No se ha encontrado una cuenta con ese nombre y apellido")
            contra=false
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
            if (data.NOMBRE === lista[i].NOMBRE && (data.APELLIDO === lista[i].APELLIDO))
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

return "Trofeo actualizado"
    
}

export {AñadirTrofeo};

function Comidas()
{
    var comidas = JSON.parse(fs.readFileSync("Comidas.json", "utf-8"))
    return comidas
}
export {Comidas}
    let usuarion = ""
    let usuarioa = ""
     let   nombre=""
   let usuarioapellido= ""
   let contraseña=""
   let t1= ""
   let t2= ""
   let t3= ""
  let  t4= ""
   let t5= ""
   let t6= ""
   let dosis= ""
   let ratio= ""
    let nombreniño= ""
   let apellidoniño= ""
function UsuarioRegistrado(data){
    let usuarion = data.NOMBRE;
    let usuarioa = data.APELLIDO;

    let resultado = null;

    for (let i = 0; i < registro.length; i++) {
        if (usuarion === registro[i].NOMBRE && usuarioa === registro[i].APELLIDO) {
            resultado = {
                NOMBRE: registro[i].NOMBRE,
                APELLIDO: registro[i].APELLIDO,
                CONTRASENA: registro[i].CONTRASENA,
                DOSIS: registro[i].DOSIS,
                RATIO: registro[i].RATIO,
                NOMBREniño: registro[i].NOMBREniño,
                APELLIDOniño: registro[i].APELLIDOniño
            };
            break;
        }
    }

    return resultado;
}
export {UsuarioRegistrado}
function recargardosis(data) {
    let usuarion = data.NOMBRE;
    let usuarioa = data.APELLIDO;
    let dosisnew = data.DOSIS;
    let resultado = null;
    for (let i = 0; i < registro.length; i++) {
        if (usuarion === registro[i].NOMBRE && usuarioa === registro[i].APELLIDO) {
            registro[i].DOSIS = dosisnew;
            resultado = {
                DOSIS: dosisnew,
            };
            break;
        }
    }
            fs.writeFileSync("Usuarios.json", JSON.stringify(registro, null, 2));
    return resultado;
}
export {recargardosis}
function recargarratio(data) {
    let usuarion = data.NOMBRE;
    let usuarioa = data.APELLIDO;
    let ratinew = data.RATIO;
    let resultado = null;
    for (let i = 0; i < registro.length; i++) {
        if (usuarion === registro[i].NOMBRE && usuarioa === registro[i].APELLIDO) {
            registro[i].RATIO = ratinew;
        
            resultado = {
                RATIO: ratinew,
            };
            break;
           }   }
            fs.writeFileSync("Usuarios.json", JSON.stringify(registro, null, 2));
    
    return resultado;
}
export {recargarratio}
function Calculadora(data){
    let eleccion = data.comidaelegida
    let unidades = data.cantidad
    let resultado = null
for (var i = 0; i<comidas.length; i++)
{
    if (eleccion === comidas[i].Alimento)
    {
        resultado = (comidas[i].CpU * unidades / UsuarioR.RATIO)
    }
}
     
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

function Guardarmensajesdelforo (data){
        Mensajenuevo: data.Mensajenuevo,
    mensajes.push(
        {
        
            "Mensaje": data.Mensajenuevo,
            "Autor": data.NOMBRE + data.APELLIDO
        }
    )
    fs.writeFileSync ("Mensajes.json", JSON.stringify(mensajes, null, 2))
 return "Mensaje guardado"
}
export {Guardarmensajesdelforo}
function darmensajesalforo() {
    return mensajes;
}
export { darmensajesalforo };


