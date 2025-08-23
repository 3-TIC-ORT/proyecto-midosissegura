const serverURL = "http://localhost:4000"; // donde corre tu backend

// Registro
document.getElementById("formRegistro").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombreRegistro").value;
  const contraseña = document.getElementById("passRegistro").value;

  const res = await fetch(`${serverURL}/Usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, contraseña })
  });

  document.getElementById("respuesta").innerText =
    res.status === 201 ? "Usuario registrado!" : "Error al registrar";
});

// Login
document.getElementById("formLogin").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombreLogin").value;
  const contraseña = document.getElementById("passLogin").value;

  const res = await fetch(`${serverURL}/Usuarios/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, contraseña })
  });

  const texto = await res.text();
  document.getElementById("respuesta").innerText = texto;
});