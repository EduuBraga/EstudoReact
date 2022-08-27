import React, { useContext } from "react"
import { ContagemContexto } from "../provider/ContagemContexto"

export function Contador() {
  const [contagem, setContagem] = useContext(ContagemContexto)

  return (
    <div className='container__contador'>
      <div>{contagem}</div>
      <div>
        <button onClick={() => { setContagem(contagem + 1) }}>+</button>
        <button onClick={() => { setContagem(contagem - 1) }}>-</button>
      </div>
    </div>
  )
}