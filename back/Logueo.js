import fs from "fs";


var registro= JSON.parse(fs.readFileSync("Usuarios.json", "utf-8"))
console.log(registro)



function Iniciar()
{
  //  var nombre = document.getElementById('nombre').value
  // var contraseña = document.getElementById('contraseña').value
  //  var gmail = document.getElementById('gmail').value
  //  var apellido = document.getElementById('apellido').value

    var nombre = "Marto"
    var apellido= "Morales"
    var contraseña = "Martito123"
    var gmail = "Martin@gmail.com"


    for (var i =0; i<registro.length;i++)
    {
        if (gmail == registro[i].gmail)
        {
            alert ("Este correo ya está siendo utilizado por otra cuenta")
            var serepite = true
        }
        
    }
        if (serepite != true)
            {
            registro.push ({
                "NOMBRE":'"' + nombre + '"',
                "APELLIDO":'"' + apellido + '"',
                "GMAIL":'"' + gmail + '"',
                "CONTRASEÑA":'"' + contraseña + '"'
            })
            fs.writeFileSync('Usuarios.json', JSON.stringify(registro))
            console.log("Usuario registrado con éxito")
        }
}

Iniciar()

