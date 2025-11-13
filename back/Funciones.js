import fs from "fs";

let registro= JSON.parse(fs.readFileSync("Usuarios.json", "utf-8"))
let mensajes = JSON.parse(fs.readFileSync("Mensajes.json", "utf-8"))
let comidas = JSON.parse(fs.readFileSync("Comidas.json", "utf-8"))
let logueado = null
let contra = null
let UsuarioR = []
let encontrado = null
let cuentacreada = null
let Mensajenuevo= null
let CONTRASENAniño = ""
let cuentaparcial = []
let niñocreado = null

  /*  let usuarion = ""
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
   let apellidoniño= ""*/
function Iniciar(data)
{
    for (var i =0; i<registro.length;i++)
    {
        if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO && data.CONTRASENA === registro[i].CONTRASENA)
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
        } else if (data.APELLIDO === null || data.NOMBRE === null || data.CONTRASENA === null || data.NOMBREniño === null || data.APELLIDOniño === null || data.DOSIS === null || data.RATIO === null)
        {
            cuentacreada = false
            console.log ("Rellena todos los campos")
        }
        else {
            cuentacreada = true
        }
        //poner que el nombre, el apellido y la contraseña tengan que tener minimo un caracter
    }
        if (cuentacreada === true)
            {
            cuentaparcial.push ({
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
                "RATIO": data.RATIO
            })
            console.log("Adulto registrado con éxito")

        }
        return cuentacreada
       
}
export {Iniciar};

function InicioNiños(data)
{
    if (data.NOMBREniño === null || data.APELLIDOniño === null || data.CONTRASENAniño === null)
    {
        console.log("Por favor llená todas las cajitas")
        niñocreado = false
    }else 
    {
        niñocreado = true
        cuentaparcial.push(
            {
                "NOMBREniño": data.NOMBREniño,
                "APELLIDOniño": data.APELLIDOniño,
                "CONTRASENAniño":data.CONTRASENAniño
            }
        )
        
        fs.writeFileSync("Usuarios.json", JSON.stringify(cuentaparcial, null, 2))
    }
return niñocreado
}
export{InicioNiños}
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
            UsuarioR.push(
                {
                    "NOMBRE": registro[i].NOMBRE,
                    "APELLIDO": registro[i].APELLIDO,
                    "CONTRASENA": registro[i].CONTRASENA,
                    "DOSIS": registro[i].DOSIS,
                    "RATIO": registro[i].RATIO,
                    "NOMBREniño": registro[i].NOMBREniño,
                    "APELLIDOniño": registro[i].APELLIDOniño,
                    "CONTRASENAniño": registro[i].CONTRASENAniño,
                    "T1": registro[i].T1,
                    "T2": registro[i].T2,
                    "T3": registro[i].T3,
                    "T4": registro[i].T4,
                    "T5": registro[i].T5,
                    "T6": registro[i].T6
                }
            )
            
            break
        } else if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO && data.CONTRASENA != registro[i].CONTRASENA)
        {
            console.log ("La contraseña es incorrecta")
            encontrado = true
            logueado = false
            contra=false
            break
        } 
  
    }
    if (encontrado == false)
    {
        console.log ("No se ha encontrado una cuenta con ese nombre y apellido")
        logueado = false
        contra = false
    }

  return [logueado,encontrado,contra,UsuarioR];
}
export {LogueoAdultos};
console.log(UsuarioR)
function AñadirTrofeo(data)
{
    if (data.T1 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (UsuarioR.NOMBRE === registro[i].NOMBRE && (UsuarioR.APELLIDO === registro[i].APELLIDO))
            {
                registro[i].T1 = true
            }
        }
    }

    if (data.T2 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (UsuarioR.NOMBRE === registro[i].NOMBRE && (UsuarioR.APELLIDO === registro[i].APELLIDO))
            {
                registro[i].T2 = true
            }
        }
    }
    if (data.T3 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (UsuarioR.NOMBRE  === registro[i].NOMBRE && (UsuarioR.APELLIDO === registro[i].APELLIDO))
            {
                registro[i].T3 = true
            }
        }
    }
    if (data.T4 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (UsuarioR.NOMBRE === registro[i].NOMBRE && (UsuarioR.APELLIDO === registro[i].APELLIDO))
            {
                registro[i].T4 = true
            }
        }
    }
    if (data.T5 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (UsuarioR.NOMBRE === registro[i].NOMBRE && (UsuarioR.APELLIDO === registro[i].APELLIDO))
            {
                registro[i].T5 = true
            }
        }
    }
    if (data.T6 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (UsuarioR.NOMBRE === registro[i].NOMBRE && (UsuarioR.APELLIDO === registro[i].APELLIDO) && (UsuarioR.CONTRASENA === registro[i].CONTRASENA))
            {
                registro[i].T6 = true
            }
        }
    }

    fs.writeFileSync("Usuarios.json",JSON.stringify(registro, null, 2))

return "Trofeo actualizado"
    
}

export {AñadirTrofeo};



function UsuarioRegistrado(data){
    let usuarion = data.NOMBRE;
    let usuarioa = data.APELLIDO;

    let resultado = 0;

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
    let resultado = 0;
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
    let resultado = 0;
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
// Suponiendo que tu JSON se llama "comidas" y ya está cargado en memoria

function Calculadora(data) {
    // Extraemos los datos que vienen del front
    let eleccion = data.comida;       // Ej: "PAPA"
    let cantidad = parseInt(data.CANTIDAD);  // Ej: "12" -> 12
        let ratio = parseInt(UsuarioR.RATIO)
        let encontrado = false;
    let resultado = 0;
       

    if (!eleccion ||  cantidad <= 0) {
        return [0, false]; // datos inválidos
    }

    // Recorremos el JSON de comidas
    for (let i = 0; i < comidas.length; i++) {
        // Comparamos ignorando mayúsculas y espacios
        if (eleccion.trim().toUpperCase() === comidas[i].Alimento.trim().toUpperCase()) {
            // Convertimos CpU a número, reemplazando coma por punto si hace falta
            let valor = comidas[i].CpU;
            if (typeof valor === "string") {
                valor = parseFloat(valor.replace(",", "."));
            }

            // Calculamos el resultado
            resultado = valor * cantidad / ratio;
            encontrado = true;
            return resultado
            break;
        }
    }

    // Si no se encontró el alimento, devolvemos 0
    if (!encontrado) {
        console.log("Comida no encontrada: " + eleccion);
        return [0, false];
    }}
    // Devolvemos resultado y true indicando éxito



export {Calculadora}

function LogueoNiños(data) {
  for (var i = 0; i < registro.length; i++) {
  
    if (data.NOMBREniño === registro[i].NOMBREniño && data.CONTRASENAniño === registro[i].CONTRASENAniño && data.APELLIDOniño === registro[i].APELLIDOniño) {
        console.log("Has iniciado sesión correctamente")
        var logueado = true
        var encontrado = true
        var contra = true
        UsuarioR.push(
            {
                "NOMBRE": registro[i].NOMBRE,
                "APELLIDO": registro[i].APELLIDO,
                "CONTRASENA": registro[i].CONTRASENA,
                "DOSIS": registro[i].DOSIS,
                "RATIO": registro[i].RATIO,
                "NOMBREniño": registro[i].NOMBREniño,
                "APELLIDOniño": registro[i].APELLIDOniño,
                "CONTRASENAniño": registro[i].CONTRASENAniño,
                "T1": registro[i].T1,
                "T2": registro[i].T2,
                "T3": registro[i].T3,
                "T4": registro[i].T4,
                "T5": registro[i].T5,
                "T6": registro[i].T6
            }
        )
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
return [logueado, encontrado, contra, UsuarioR];
}
export{LogueoNiños};

function NiñoRegistrado(){
return [UsuarioR.CONTRASENAniño, UsuarioR.NOMBREniño, UsuarioR.APELLIDOniño]
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
