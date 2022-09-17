import { Form } from "./style"
import { ButtonTheme } from "../ButtonTheme"

export function FormHome(props) {
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
    <Form isOn={props.estudanteNome}>
      <div>
        <input placeholder="Anote aqui" type="text" name="nome" onChange={e => props.setEstudanteNome(e.target.value)} value={props.estudanteNome} />
        <button  onClick={executarAnotacao}>Anotar</button>
      </div>
      <ButtonTheme handleTheme={props.handleTheme} ></ButtonTheme>
    </Form>
  )
}