import React, { useEffect, useState } from "react";

export default function Contador() {

    const [numero, porNumero] = useState(0)
    const [podeounao, porPodeounao] = useState(true)
    const [simounao, porSimounao] = useState('Sim :)')

    useEffect(() => {
        porNumero(parseInt(localStorage.getItem("numero")))
    }, [])

    useEffect(() => {
        document.title = numero
        localStorage.setItem("numero", numero)
    }, [numero])

    useEffect(
        () => {
            return () => console.log('Não existe mais componente')
        }, []
    )

    function podeounaoFunction() {
        podeounao ? porPodeounao(false) : porPodeounao(true)
        podeounao ? porSimounao('Não :(') : porSimounao('Sim :)')
    }

    function adicionar() {
        if (podeounao) { porNumero(numero + 1) }
    }

    function diminuir() {
        if (podeounao) { porNumero(numero - 1) }
    }

    return (
        <div className="card__contador">
            <h1>Contador : {numero}</h1>
            <button onClick={adicionar}>adicionar</button>
            <button onClick={diminuir}>diminuir</button>
            <label>O número pode ser modificado no momento?</label>
            <button onClick={podeounaoFunction}>{simounao}</button>
        </div>
    )
}
