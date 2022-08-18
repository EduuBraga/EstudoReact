export default class Tarefa{

    static proximaTarefa = 0

    constructor(texto){
        this.texto = texto
        this.id = Tarefa.proximaTarefa++
        this.finalizada = false
    }

}