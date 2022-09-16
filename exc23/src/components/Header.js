import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { AuthButton } from "./Auth"

export function Header(){
  const login = useSelector(state=>state)
  const navigate = useNavigate()

  useEffect(()=>{
    if(login){
      navigate('/')
    }
  }, [login])

  return(
    <header className="header">
      <div>Cold Dev</div>
      <nav className="nav__header">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/aulas">Aulas</Link>
        <AuthButton></AuthButton>
      </nav>
    </header>
  )
}