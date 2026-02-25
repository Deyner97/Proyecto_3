const express = require('express');
const app = express();
const PORT = 3001; // Usamos el 3001 porque React ya usa el 5173

// Esta es una "ruta" (endpoint). Cuando alguien entre aquí, el servidor responde.
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: "¡Hola desde el servidor Node.js! 🧠" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});