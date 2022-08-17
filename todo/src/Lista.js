import React from 'react'

export default function Lista(props) {
    return (
        <div>
            <h3>Tarefas</h3>
            <ul className="lista">
                {props.items.map((item, key) => <li key={key}>{item}</li>)}
            </ul>
        </div>
    )
}