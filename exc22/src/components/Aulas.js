import { data } from "./Data";
import { Link, useMatch } from "react-router-dom";

export function Aulas() {
  const match = useMatch("/aulas")

  return (
    <div className="aulas">
      <h3>Aulas</h3>
      <ul className="lista__aulas">
        {data.map((aula) =>
          <div key={aula.id} className="item__aulas">
            <li key={aula.id}>{aula.tittle} -</li>
            <Link to={`${match.pathname}/${aula.id}`}>Aula {aula.id}</Link>
          </div>
        )}
      </ul>
    </div>
  )
}