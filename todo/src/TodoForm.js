import React, {useState} from "react";

export default function TodoForm(props){
    const [tarefa, porTarefa] = useState('')

    function lidarMudanca(event) {
        let texto = event.target.value
        porTarefa(texto)
    }

    function novaTarefa(event) {
        event.preventDefault()
        if (tarefa) {
            props.AdicionarItem(tarefa)
            // porItems([...items, tarefa])
            porTarefa('')
        }
    }

    return (
        <form className="formulario">
            <input type="text" onChange={lidarMudanca} value={tarefa} placeholder='Adicionar nova tarefa'></input>
            <button onClick={novaTarefa}>+</button>
        </form>
    )
}