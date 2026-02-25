import { useState, useEffect } from 'react'

function App() {
  const [datos, setDatos] = useState("Cargando saludo...");

  useEffect(() => {
    // Aquí es donde React le toca la puerta a Node
    fetch('http://localhost:3001/api/saludo')
      .then(respuesta => respuesta.json())
      .then(data => {
        setDatos(data.mensaje); // Guardamos lo que nos dijo el servidor
      })
      .catch(error => console.log("Error conectando:", error));
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Proyecto 3: Conexión Exitosa 🚀</h1>
      
      <div style={{ border: '2px solid green', padding: '20px', borderRadius: '10px' }}>
        <h3>Respuesta del Servidor:</h3>
        <p style={{ fontSize: '20px', color: 'blue' }}>{datos}</p>
      </div>
    </div>
  )
}

export default App