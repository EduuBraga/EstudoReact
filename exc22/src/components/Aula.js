import { data } from "./Data";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Aula(){
  const params = useParams()
  const [aula, setAula] = useState({})

  useEffect(()=>{
    setAula(data.filter(aula=>aula.id == params.id)[0])
    console.log(aula)
  })

  return(
    <div>
      <h1>{aula.tittle}</h1> 
      <p>{aula.description}</p>
    </div>
  )
}
