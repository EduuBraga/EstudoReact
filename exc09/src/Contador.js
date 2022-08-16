import React from "react";

export default class Contador extends React.Component {

    constructor(props) {
        super(props)

        this.adicionar = this.adicionar.bind(this)
        this.podeounao = this.podeounao.bind(this)
        this.diminuir = this.diminuir.bind(this)
        this.state = { numero: 1, podeounao: true, podeounaoText: 'pode ser executado' }
    }

    adicionar() {
        if (this.state.podeounao) {
            this.setState((state) => { return { numero: state.numero + 1 } }, () => {
                localStorage.setItem('states', JSON.stringify(this.state))
            })
        } else {
            return
        }
    }

    diminuir(){
        if (this.state.podeounao) {
            this.setState((state) => { return { numero: state.numero - 1 } }, () => {
                localStorage.setItem('states', JSON.stringify(this.state))
            })
        } else {
            return
        }
    }

    podeounao() {
        if (this.state.podeounao == true) {
            this.setState(() => { return { podeounao: false, podeounaoText: 'não pode ser executado' } })
        } else if (this.state.podeounao == false) {
            this.setState(() => { return { podeounao: true, podeounaoText: 'pode ser executado' } }, () => {
                this.setState(() => { return { podeounaoText: 'pode ser executado' } })
            })
        }
    }

    componentDidMount() {
        this.setState(JSON.parse(localStorage.getItem('states')))
    }

    shouldComponentUpdate() {
        return this.state.podeounao   
    }

    componentWillUnmount(){}

    render() {
        return (
            <div>
                <h1>Contador : {this.state.numero}</h1>
                <button onClick={this.adicionar}>adicionar</button>
                <button onClick={this.diminuir}>diminuir</button>
                <button onClick={this.podeounao}>{this.state.podeounaoText}</button>
            </div>
        )
    }
}