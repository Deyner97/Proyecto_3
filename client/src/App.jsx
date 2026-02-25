import { useState } from 'react'

export default function App() {
  const [analisis, setAnalisis] = useState(null);

  const consultarIA = () => {
    fetch('http://localhost:3001/api/python')
      .then(res => res.json())
      .then(data => setAnalisis(data))
      .catch(err => console.log("Error:", err));
  };

  return (
    <div className="bg-dark min-vh-100 text-white">
      {/* Header */}
      <header className="py-5 text-center border-bottom border-secondary">
        <h1 className="display-3 fw-bold text-info">DEYNER DEV STUDIO</h1>
        <p className="lead text-secondary">Webs de alto rendimiento con Node.js y Python</p>
      </header>

      {/* Botón de Python */}
      <div className="container py-5 text-center">
        <button onClick={consultarIA} className="btn btn-outline-info btn-lg rounded-pill px-5">
          Calcular Presupuesto con IA
        </button>
        {analisis && (
          <div className="mt-4 p-3 bg-secondary bg-opacity-25 border border-info rounded mx-auto" style={{maxWidth: '500px'}}>
            <code className="text-info">{analisis.mensaje_python}</code>
          </div>
        )}
      </div>

      {/* Servicios */}
      <main className="container pb-5">
        <div className="row g-4">
          <Card title="Plan Básico" price="$199" feat="Landing Page + SEO" />
          <Card title="Plan Business" price="$499" feat="E-commerce + DB" />
          <Card title="Plan Enterprise" price="Custom" feat="Sistemas con IA" />
        </div>
      </main>
    </div>
  );
}

function Card({ title, price, feat }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 bg-secondary bg-opacity-10 border-secondary text-white p-4">
        <h3 className="card-title text-info">{title}</h3>
        <div className="display-5 my-3 fw-bold">{price}</div>
        <p className="card-text text-secondary mb-4">{feat}</p>
        <button className="btn btn-light fw-bold mt-auto">Seleccionar</button>
      </div>
    </div>
  );
}