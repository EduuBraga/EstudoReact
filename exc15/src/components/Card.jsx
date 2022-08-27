import { useContext } from "react"
import { UsuarioContext } from "../provider/UsuarioContext"

export function Card(){
  const {tema} = useContext(UsuarioContext)

  return(
    <div style={{background : tema.BG}}>
      <h2 style={{color : tema.color}}>Sobre me</h2>
      <p style={{color : tema.color}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eum error eos optio corrupti at, rerum non aliquam distinctio, dicta doloremque eligendi dolore? Eius vel iste fugit fuga officia nemo!</p>
      <h2 style={{color : tema.color}}>Experiência</h2>
      <p style={{color : tema.color}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sed quam! Debitis quam itaque sit vel, officiis sed facere iste iusto, a tenetur amet. Aliquid dicta sapiente explicabo est nobis!</p>
    </div>
  )
}