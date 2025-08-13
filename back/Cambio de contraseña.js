var Usuario = 
[
{
    sesion: "GerardoTabakman",
    contraseña: "Maxi2223",
    gmail: "Gerardo@gmail.com"
},
{
    sesion: "HernanRossi",
    contraseña: "Male123",
    gmail: "Hernan@gmail.com"
}
]

function Cambio()
{
var sesion = document.getElementById('sesion').value
var contraseña = document.getElementById('contraseña').value
var gmail = document.getElementById("gmail").value
var nuevacontraseña = document.getElementById ("nueva contraseña").value

for (var i = 0; i< Usuario.length;i++)
    {
        if (contraseña == Usuario[i].contraseña && (nuevacontraseña != Usuario[i].contraseña))
    {
            console.log("Contraseña cambiada")
    }
    else if (gmail == Usuario[i].gmail && (nuevocorreo != Usuario[i].gmail))
    {
        console.log("Mail cambiado")
    }
    }
}