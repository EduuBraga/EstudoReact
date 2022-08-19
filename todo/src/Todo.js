import React, { useState } from "react";
import Lista from "./Lista";
import Tarefa from "./Tarefa";
import TodoForm from "./TodoForm";

import './Todo.css'

export default function Todo() {

    const [items, porItems] = useState([])

    function AdicionarItem(texto) {
        let tarefa = new Tarefa(texto)
        porItems([...items, tarefa])
    }

    function deletarTarefa(id) {
        let filtrandoItems = items.filter((item) => item.id !== id)
        porItems(filtrandoItems)
    }

    return (
        <div className="container">
            <h1>to-do List</h1>

            <TodoForm AdicionarItem={AdicionarItem}></TodoForm>
            <Lista deletarTarefa={deletarTarefa} items={items} ></Lista>

        </div>
    )
}
