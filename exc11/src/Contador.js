import React, { useState } from "react";

export default function Contador(props) {

    const [numero, porNumero] = useState(props.numero)

    function adicionar(){
        porNumero(numero + 1)
    }

    function diminuir(){
        porNumero(numero - 1)
    }

    return (
        <div>                 
            <h1>Contador : {numero}</h1>
            <button onClick={adicionar}>adicionar</button>              
            <button onClick={diminuir}>diminuir</button>
            <button >pode ou nao pode</button>
        </div>
    )
}
