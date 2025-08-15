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



