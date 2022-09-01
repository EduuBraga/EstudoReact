import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"

export default function App() {
  const {register, handleSubmit} = useForm();

  function onSubmit(json){
    console.log(json)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome:
          <input type="text" {...register("nome")}></input>
        </label>
        <label>
          Sobrenome:
          <input type="text" {...register("sobrenome")}></input>
        </label>
        <button>Enviar</button>
      </form>
    </div>
  )
}
