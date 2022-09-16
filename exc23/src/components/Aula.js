import { data } from "./Data";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function useAula(){
  const id = useParams().id
  return data.filter(aula=>aula.id == id)[0]
}

export function Aula(){
  const aula = useAula()

  return(
    <div className="home">
      <h1>{aula.tittle} - Aula {aula.id}</h1> 
      <p>{aula.description}</p>
    </div>
  )
}
