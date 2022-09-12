import { data } from "./Data";
import { Link, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";

export function Aulas() {
  const match = useMatch("/aulas")

  const [url, setUrl] = useState('')

  useEffect(()=>{
    const newUrl = match.pathname.slice(-1) === '/' ? match.pathname : match.pathname + '/' 
    setUrl(newUrl)
  }, [])

  return (
    <div className="aulas">
      <h3>Aulas</h3>
      <ul className="lista__aulas">
        {data.map((aula) =>
          <div key={aula.id} className="item__aulas">
            <li key={aula.id}>{aula.tittle} -</li>
            <Link to={`${url}${aula.id}`}>Aula {aula.id}</Link>
          </div>
        )}
      </ul>
    </div>
  )
}