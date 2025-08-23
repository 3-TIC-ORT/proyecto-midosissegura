const serverURL = "http://localhost:4000"; // donde corre tu backend

// Registro
document.getElementById("formR").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombreR").value;
  const contraseña = document.getElementById("contraseñaR").value;

  const res = await fetch(`${serverURL}/Usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, contraseña })
  });

  document.getElementById("respuesta").innerText =
    res.status === 201 ? "Usuario registrado!" : "Error al registrar";
});

// Login
document.getElementById("formL").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombreL").value;
  const contraseña = document.getElementById("contraseñaL").value;

  const res = await fetch(`${serverURL}/Usuarios/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, contraseña })
  });

  const texto = await res.text();
  document.getElementById("respuesta").innerText = texto;
});