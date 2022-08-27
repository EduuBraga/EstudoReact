import { useContext } from 'react'
import { UsuarioContext } from './provider/UsuarioContext'
import { Card } from './components/Card'
import './App.css'

export default function App() {
  const { tema, setTema } = useContext(UsuarioContext)

  function mudarTema() {
    if (tema.color !== "#ccc") {
      setTema({
        color: "#ccc", BG: "#222",
      })
    }else{
      setTema({
        color: "#222", BG: "#ccc",
      })
    }
  }
  return (
    <div style={{ backgroundColor: tema.BG }} className="APP">
      <h1 style={{ color: tema.color }}>Usuário</h1>
      <p style={{ color: tema.color }}><strong>Nome:</strong> Carlos Eduardo</p>
      <Card></Card>
      <button onClick={() => { mudarTema() }}>Mudar tema</button>
    </div>
  )

}
