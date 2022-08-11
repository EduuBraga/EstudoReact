class Anime {
    constructor(eps, nome) {
        this.eps = eps
        this.nome = nome
    }

    descricao() {
        console.log("Este anime tem", this.eps, "episódios, seu nome é", this.nome)
    }
}

export default Anime