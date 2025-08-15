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
    var nombre= document.getElementById('nombre').value
    var contraseña = document.getElementById ('contraseña').value
    var apellido = document.getElementById('apellido').value
    var gmail = document.getElementById('gmail').value

    for (var i = 0; i< Usuario.length;i++)
    {
        if (nombre == Usuario[i].nombre && contraseña == Usuario[i].contraseña && apellido == Usuario[i].apellido && gmail == Usuario[i].gmail)
    {
            console.log (nombre + " " + apellido + " se registró. ")
    }
  
}
}



