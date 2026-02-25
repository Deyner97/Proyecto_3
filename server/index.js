const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process'); // <--- Importamos esta herramienta
const app = express();
const PORT = 3001;

app.use(cors());

// NUEVA RUTA: Aquí es donde Node llama a Python
app.get('/api/python', (req, res) => {
  // Ejecutamos el comando 'python' apuntando a nuestro archivo
  const pythonProcess = spawn('python', ['./python_logic/mipagina.py']);

  pythonProcess.stdout.on('data', (data) => {
    // Cuando Python termina y nos manda la info
    const resultadoPython = JSON.parse(data.toString());
    res.json(resultadoPython);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Error en Python: ${data}`);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});