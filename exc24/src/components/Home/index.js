import { useEffect } from "react"
import { useState } from "react"
import { FormHome } from "../FormHome"

import { Container } from "./style"

export function Home() {
  const [estudanteNome, setEstudanteNome] = useState('')
  const [estudantes, setEstudantes] = useState([])

  return (
    <>
      <FormHome setEstudantes={setEstudantes} setEstudanteNome={setEstudanteNome} estudanteNome={estudanteNome}></FormHome>

      {estudantes.map((estudante) =>
        <Container key={estudante.nome}>
          <p>{estudante.nome}</p>
          <span>{estudante.data}</span>
        </Container>
      )}
    </>
  )
}