import { useState } from "react"
import { FormHome } from "../FormHome"
import { GlobalStyle } from '../GlobalStyle/styles';

import { Container,Anotacao } from "./style"
import { ThemeProvider } from "styled-components"
import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'

export function Home() {
  const [estudanteNome, setEstudanteNome] = useState('')
  const [estudantes, setEstudantes] = useState([])

  const [theme, setTheme] = useState(light)

  function handleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FormHome handleTheme={handleTheme} setEstudantes={setEstudantes} setEstudanteNome={setEstudanteNome} estudanteNome={estudanteNome}/>

        {estudantes.map((estudante) =>
          <Container key={estudante.nome}>
            <Anotacao >
              <p>{estudante.nome}</p>
              <span>{estudante.data}</span>
            </Anotacao>
          </Container>
        )}

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}