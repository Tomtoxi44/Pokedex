

const NavBar = ({ index, suivant, precedent }) => {
    return <nav>
        {index > 0 ? <button onClick={precedent}>Précedent</button> : undefined}
        {index < 4 ? <button onClick={suivant}>Suivant</button> : undefined}
    </nav>
}




export default NavBar;