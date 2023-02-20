import React, { useState } from 'react';
import './App.css'
import TabelaIMC from './components/TabelaIMC';
// needed finalization tag "/" like in <img/>

const fPeso = (p, sp) => {
  return (
    <div>
      <label>Peso </label>
      <input type="text" value={p} onChange={(e) => sp(e.target.value)} />
    </div>
  )
}

const fAltura = (a, sa) => {
  return (
    <div>
      <label>Altura </label>
      <input type="text" value={a} onChange={(e) => sa(e.target.value)} />
    </div>
  )
}

const fCalcular = (p, a, sr) => {
  const calc = () => {
    sr(p / (a * a))
  }
  return (
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

const fResultado = (r) => {
  return (
    <div>
      <p>Resultado: {r.toFixed(1)}</p>
    </div>
  )
}

export default function App() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  return (
    <main>
      {fPeso(peso, setPeso)}
      {fAltura(altura, setAltura)}
      {fCalcular(peso, altura, setResultado)}
      {fResultado(resultado)}
      <TabelaIMC />
    </main>
  )
}