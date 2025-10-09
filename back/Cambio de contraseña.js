var Usuario = 
[
{
    nombre: "Gerardo",
    apellido:"Tabakman",
    contraseña: "Maxi2223",
    gmail:"gerardo@gmail.com",

},
{
    nombre: "Hernan",
    apellido:"Rossi",
    contraseña: "Male123",
    gmail:"Hernan@gmail.com"
}
]

function Cambio()
{
var nombre= document.getElementById('nombre').value
var apellido = document.getElementById('apellido').value
var contraseña = document.getElementById('contraseña').value
var gmail = document.getElementById("gmail").value
var nuevacontraseña = document.getElementById ("nueva contraseña").value

for (var i = 0; i< Usuario.length;i++)
    {
        if (contraseña == Usuario[i].contraseña && (nuevacontraseña != Usuario[i].contraseña))
    {
            console.log("Contraseña cambiada")
    }
    else if (gmail == Usuario[i].gmail && (nuevocorreo != Usuario[i].gmail) && (contraseña == Usuario[i].contraseña))
    {
        console.log("Mail cambiado")
    }
    }
}