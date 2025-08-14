var Usuario = 
[
{
    nombre: "Gerardo",
    apellido:"Tabakman",
    contraseña: "Maxi2223",
    correo:"gerardo@gmail.com",

},
{
    nombre: "Hernan",
    apellido:"Rossi",
    contraseña: "Male123",
    correo:"Hernan@gmail.com"
}
]

function Loguear()
{
    var sesion= document.getElementById('NOMBRE').value
    var contraseña = document.getElementById ('CONTRASEÑA').value

    for (var i = 0; i< Usuario.length;i++)
    {
        if (sesion == Usuario[i].sesion && contraseña == Usuario[i].contraseña)
    {
            console.log (sesion + "se registró. ")
    }
    else {  console.log("El nombre de usuario y la contraseña no coinciden.")}
    }
  
}   



