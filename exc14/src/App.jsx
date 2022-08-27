import { useState } from 'react'
import './App.css'

function App() {

  const [contagem, setContagem] = useState(0)

  return (
   <div>
    <div>{contagem}</div>
    <button onClick={()=>{setContagem(contagem + 1)}}>+</button>
    <button onClick={()=>{setContagem(contagem - 1)}}>-</button>
   </div>
  )
}

export default App
