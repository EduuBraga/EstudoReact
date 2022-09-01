import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export default function App() {
  const [repositorios, setRepositorios] = useState([])

  const url = ""

  useEffect(() => {
    axios.get(url)
      .then(response => { 
        setRepositorios(response.data) 
        console.log(repositorios)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      {repositorios.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
            <p>Acesse aqui: <a target='_blank' href={repo.html_url}>{repo.name}</a></p>
          </li>)
      })}
    </div>
  )
}
