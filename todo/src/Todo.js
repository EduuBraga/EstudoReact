import React, { useState } from "react";
import Lista from "./Lista";
import './Todo.css'

export default function Todo() {

    const [tarefa, porTarefa] = useState('')
    const [items, porItems] = useState([])

    function lidarMudanca(event) {
        let texto = event.target.value
        porTarefa(texto)
    }

    function novaTarefa(event) {
        event.preventDefault()
        if (tarefa) {
            porItems([...items, tarefa])
            porTarefa('')
        }
    }

    return (
        <div className="container">
            <h1>to-do List</h1>
            <form className="formulario">
                <input type="text" onChange={lidarMudanca} value={tarefa} placeholder='Adicionar nova tarefa'></input>
                <button onClick={novaTarefa}>+</button>
            </form>

            <div className="card__lista">
                <Lista items={items}/>
            </div>
        </div>
    )
}

