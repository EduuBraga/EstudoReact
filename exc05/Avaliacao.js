import Anime from "./Anime.js";

class Avaliacao extends Anime {

    constructor(eps, nome, nota) {
        super(eps,nome)
        this.nota = nota
    }

    descricao(){
        console.log("O anime", this.nome, "tem uma avaliação de nota", this.nota)
    }
}

export default Avaliacao