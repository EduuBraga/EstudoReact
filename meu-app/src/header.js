import React from "react"

function header(props) {
    return (
        <header className='header'>
            <h1>{props.nome}</h1>

            <nav>
                <a>{props.links[0]}</a>
                <a>{props.links[1]}</a>
                <a>{props.links[2]}</a>
            </nav>
        </header >
    )
}

export default header