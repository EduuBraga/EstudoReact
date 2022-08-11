import './App.css'
import Menu from './menu.js'

function Header(props) {
    return (
        <header className="header">
            <h1>{props.logo}</h1>
            <Menu links={props.links}></Menu>
        </header>
    )
}

export default Header