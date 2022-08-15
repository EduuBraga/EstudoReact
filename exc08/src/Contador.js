import React from "react";

export default class Contador extends React.Component {

    constructor(props) {
        super(props)

        this.adicionar = this.adicionar.bind(this)
        this.remover = this.remover.bind(this)

        this.state = { number: this.props.numero }
    }

    adicionar() {
        this.setState((state) => { return { number: state.number + 1 } })
    }

    remover() {
        this.setState((state) => { return { number: state.number - 1 } })
    }

    render() {
        return (
            <div>
                <h1>Contador : {this.state.number}</h1>
                <button onClick={this.adicionar}>adicionar</button>
                <button onClick={this.remover}>remover</button>
            </div>
        )
    }
}