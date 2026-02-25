const express = require('express');
const cors = require('cors'); // <--- 1. Importa CORS
const app = express();
const PORT = 3001;

app.use(cors()); // <--- 2. Dale permiso a React para entrar

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: "¡Hola desde el servidor Node.js! 🧠" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});