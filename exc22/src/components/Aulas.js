import { data } from "./Data";

export function Aulas(){
  return(
    <div className="aulas">
      <h3>Aulas</h3>
      <ul className="lista__aulas">
        {data.map((aula)=>
          <li key={aula.id}>{aula.tittle}</li>
        )}
      </ul>
    </div>
  )
}