import React from 'react'

export default function Lista(props) {
    return (
        <>
            <h3>Tarefas</h3>
            <ul className="lista">
                {props.items.map(item => <li key={item.id}>{item.texto}</li>)}
            </ul>
        </>
    )
}