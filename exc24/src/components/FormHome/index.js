import { useEffect, useState } from "react"
import { Form, Button } from "./style"

export function FormHome(props) {
  const [hora, setHora] = useState("00:00")

  useEffect(() => {
    setInterval(() => {
      setHora(new Date().toLocaleString("pt-br", {
        hour: "2-digit",
        minute: "2-digit"
      }))
    }, 1000)
  })

  function executarAnotacao(e) {
    e.preventDefault()
    if (props.estudanteNome) {
      const estudante = {
        nome: props.estudanteNome,
        data: new Date().toLocaleString("pt-br", {
          hour: "2-digit",
          minute: "2-digit",
        })
      }

      props.setEstudantes(prevState => [...prevState, estudante])
      props.setEstudanteNome('')
    }
  }

  return (
    <Form>
      <input placeholder="Anote aqui" type="text" name="nome" onChange={e => props.setEstudanteNome(e.target.value)} value={props.estudanteNome} />
      <Button isOn={props.estudanteNome} onClick={executarAnotacao}>Anotar</Button>
      <span>{hora}</span>
    </Form>
  )
}