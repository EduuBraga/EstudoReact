function Menu(props) {
    const MenuLinks = props.links.map((link, index) => <a key={index}>{link}</a>) 

    return (
        <nav>
            {MenuLinks}
        </nav>
    )
}

export default Menu 