import { createContext, useState } from "react";

export const ContagemContexto = createContext()

export function ContagemProvider(props) {
  const [contagem, setContagem] = useState(0)

  return (
    <ContagemContexto.Provider value={[contagem, setContagem]}>
      {props.children}
    </ContagemContexto.Provider>
  )
}