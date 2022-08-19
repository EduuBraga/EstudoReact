import React from 'react'

export default function Lista(props) {
    return (
        <div className="card__lista">
            <h3>Tarefas</h3>
            <ul className="lista">
                {props.items.map(item =>
                    <li key={item.id}>
                        <p>{item.texto}</p>
                        <button onClick={()=>{props.deletarTarefa(item.id)}}><img className='lixeira' src='./assets/trash-can.png' alt='deletar tarefa'></img></button>
                    </li>)
                }
            </ul>
        </div>
    )
}