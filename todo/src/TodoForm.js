import React, {useState} from "react";

export default function TodoForm(props){
    const [texto, porTexto] = useState('')

    function lidarMudanca(event) {
        let texto = event.target.value
        porTexto(texto)
    }

    function novaTarefa(event) {
        event.preventDefault()
        if (texto) {
            props.AdicionarItem(texto)
            porTexto('')
        }
    }

    return (
        <form className="formulario">
            <input type="text" onChange={lidarMudanca} value={texto} placeholder='Adicionar nova tarefa'></input>
            <button onClick={novaTarefa}>+</button>
        </form>
    )
}