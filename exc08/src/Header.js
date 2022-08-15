import React from "react";
import Menu from "./Menu.js";
import './App.css'

export default function Header(props){
    return(
        <header className="header">
            <h1>{props.nome}</h1>
            <Menu links={props.links}></Menu>
        </header>
    )
}
