import { useState } from 'react'

function App() {
  const [datosPython, setDatosPython] = useState(null);

  const ejecutarPython = () => {
    fetch('http://localhost:3001/api/python')
      .then(res => res.json())
      .then(data => setDatosPython(data))
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Proyecto 3: Integración Full Stack</h1>
      <button onClick={ejecutarPython} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Ejecutar Script de Python
      </button>

      {datosPython && (
        <div style={{ marginTop: '20px', background: '#f0f0f0', padding: '15px' }}>
          <h3>Resultado de Python:</h3>
          <p><strong>Mensaje:</strong> {datosPython.mensaje_python}</p>
          <p><strong>Valor calculado:</strong> {datosPython.valor}%</p>
        </div>
      )}
    </div>
  )
}

export default App