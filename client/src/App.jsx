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
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      {/* Header */}
      <header className="p-10 text-center border-b border-gray-800">
        <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          DEYNER DEV STUDIO
        </h1>
        <p className="mt-4 text-gray-400 text-lg">Webs de alto rendimiento con Node.js y Python</p>
      </header>

      {/* Botón de Python */}
      <div className="py-10 text-center">
        <button 
          onClick={consultarIA}
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full transition-all"
        >
          Calcular Presupuesto con IA
        </button>
        {analisis && (
          <div className="mt-6 p-4 bg-gray-800 rounded-lg max-w-md mx-auto border border-cyan-500">
            <p className="text-cyan-400 font-mono">{analisis.mensaje_python}</p>
          </div>
        )}
      </div>

      {/* Grilla de Servicios */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        <Card title="Plan Básico" price="$199" feat="Landing Page + SEO" />
        <Card title="Plan Business" price="$499" feat="E-commerce + Base de Datos" />
        <Card title="Plan Enterprise" price="Custom" feat="Sistemas con Inteligencia Artificial" />
      </main>
    </div>
  );
}

function Card({ title, price, feat }) {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition-transform border border-gray-700">
      <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
      <div className="text-4xl font-black my-4">{price}</div>
      <p className="text-gray-400 mb-6">{feat}</p>
      <button className="w-full py-2 rounded-lg bg-white text-black font-bold">Seleccionar</button>
    </div>
  );
}