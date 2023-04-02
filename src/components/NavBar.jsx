import nav from './navBar.module.css'
const NavBar = ({ index, suivant, precedent, pokemon,setpokemonIndex,pokemonIndex }) => {
    
    const handleClick = (poke) => {setpokemonIndex(pokemon.indexOf(poke));
    }

    
    return (
        <nav>
        <div className={nav.selecteur}>
            { pokemon.map((poke) => {return <button key={poke.name} onClick={() => handleClick(poke)}>{poke.name}</button> })}
        </div>
            <div className={nav.suivant}>
            {index > 0 ? <button onClick={precedent}>Précedent</button> : undefined}
            {index < 4 ? <button onClick={suivant}>Suivant</button> : undefined}
            </div>
            </nav>
    )}


export default NavBar;