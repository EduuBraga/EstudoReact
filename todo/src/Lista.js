import React from 'react'

function ImgCheck(props){
    if(props.finalizada){
        return (<img className='check' alt='finalizar' src='./assets/on.png' ></img>)
    }else{
        return(<img className='check' alt='ainda não finalizada' src='./assets/off.png'></img>)
    }
}

export default function Lista(props) {
    return (
        <div className="card__lista">
            <h3>Tarefas</h3>
            <ul className="lista">
                {props.items.map(item =>
                    <li className={item.finalizada? "finalizada" : ""}  key={item.id}>
                        <button onClick={()=>{props.finalizarTarefa(item) }}><ImgCheck finalizada={item.finalizada}></ImgCheck></button>
                        {item.texto}
                        <button onClick={()=>{props.deletarTarefa(item.id)}}><img className='lixeira' src='./assets/trash.png' alt='deletar tarefa'></img></button>
                    </li>)
                }
            </ul>
        </div>
    )
}