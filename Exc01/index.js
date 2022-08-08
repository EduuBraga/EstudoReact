const root = document.querySelector("#root")

const t1 = React.createElement("h1", {id:"Titulo principal"}, "Título principal")
const subTtl = React.createElement("h4", {id:"subtitulo"}, "Subtítulo")

const article = React.createElement("div", {class:"container-article"}, t1, subTtl)

ReactDOM.render(article, root)