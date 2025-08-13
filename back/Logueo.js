var Usuario = 
[
{
    sesion: "GerardoTabakman",
    contraseña: "Maxi2223",
},
{
    sesion: "HernanRossi",
    contraseña: "Male123",
}
]

function Loguear()
{
    var sesion= document.getElementById('sesion').value
    var contraseña = document.getElementById ('contraseña').value

    for (var i = 0; i< Usuario.length;i++)
    {
        if (sesion == Usuario[i].sesion && contraseña == Usuario[i].contraseña)
    {
            console.log (sesion + "se registró. ")
            window.location.href = 'https://google.com/';
            return
    }
    }
    console.log("El nombre de usuario y la contraseña no coinciden.")
}   



