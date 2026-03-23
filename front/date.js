 const si = 0;
 
 
 fetch("http://127.0.0.1:3000/horario", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
       true: si,
    })}).then(response => response.json())
    .then(data => {     console.log ("Respuesta del servidor:", data)
            
    })



