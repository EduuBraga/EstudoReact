import React, { useState } from "react";
import Lista from "./Lista";
import TodoForm from "./TodoForm";

import './Todo.css'

export default function Todo() {

    const [items, porItems] = useState([])

    function AdicionarItem(item) {
        porItems([...items, item])
    }

    return (
        <div className="container">
            <h1>to-do List</h1>
            <TodoForm AdicionarItem={AdicionarItem}></TodoForm>

            <div className="card__lista">
                <Lista items={items} ></Lista>
            </div>
        </div>
    )
}
