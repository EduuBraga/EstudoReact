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

    return (
        <section className="container">
            <h1>to-do List</h1>
            <TodoForm AdicionarItem={AdicionarItem}></TodoForm>

            <div className="card__lista">
                <Lista items={items} ></Lista>
            </div>
        </section>
    )
}
