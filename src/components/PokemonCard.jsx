import ColorCard from './PokemonCard.module.css'


{/* <figure className={colorCard.plante}>
<img src={pokemon.imgSrc}
alt={pok}
className={colorCard.cardImg} />
<figcaption>bulbasaur</figcaption>
</figure> */}


// className={colorCard.plante}

const PokemonCard = ({ Pokemon }) => {
    console.log("Ceci est ma props pokemonList", Pokemon);
    const pokemon = Pokemon

    return <figure className={ColorCard.plante} >
        <p>{pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt="" className={ColorCard.cardImg} />}</p>
        <figcaption>{pokemon.name}</figcaption>
    </figure>
}
export default PokemonCard;
