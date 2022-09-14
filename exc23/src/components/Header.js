import { Link } from "react-router-dom"
import { Auth } from "./Auth"

export function Header(){
  return(
    <header className="header">
      <div>Cold Dev</div>
      <nav className="nav__header">
        <Auth></Auth>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/aulas">Aulas</Link>
      </nav>
    </header>
  )
}