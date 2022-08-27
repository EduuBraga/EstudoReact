import { useContext } from "react"
import { ContagemContexto } from "../provider/ContagemContexto"


export function Header(){
  const [contagem] = useContext(ContagemContexto)

  return(
    <div className="Header">
      <h1>Contador</h1>
      <span>{contagem}</span>
    </div>
  )
}