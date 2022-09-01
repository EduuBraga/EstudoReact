import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export default function App() {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')

  function onSubmit(e){
    e.preventDefault()
    let data ={
      nome,
      sobrenome
    }
    console.log(data)
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Nome:
          <input value={nome} onChange={(e)=>{setNome(e.target.value)}}></input>
        </label>
        <label>
          Sobrenome:
          <input value={sobrenome} onChange={(e)=>{setSobrenome(e.target.value)}}></input>
        </label>
        <button>Enviar</button>
      </form>
    </div>
  )
}
