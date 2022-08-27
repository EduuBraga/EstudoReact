import React, { createContext, useState } from "react";

export const UsuarioContext = createContext({})

export function UsuarioProvider(props) {
  const [tema, setTema] = useState({
    color: "#ccc", BG: "#222",
  })

  return (
    <UsuarioContext.Provider value={{ tema, setTema }} >
      {props.children}
    </UsuarioContext.Provider>
  )
}