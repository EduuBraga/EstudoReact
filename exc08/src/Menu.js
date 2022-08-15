import React from "react";

export default function Menu(props) {
    return (
        <nav>
            {props.links.map((element, key) => <a key={key}> {element} </a>)}
        </nav>
    )
}