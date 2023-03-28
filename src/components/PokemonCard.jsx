import colorCard from './PokemonCard.module.css'


{/* <figure className={colorCard.plante}>
<img src={pokemon.imgSrc}
alt={pok}
className={colorCard.cardImg} />
<figcaption>bulbasaur</figcaption>
</figure> */}


// className={colorCard.plante}

const pokemonCard = () => {

    const pokemon = pokemonList[0]

    return <figure className={colorCard.plante} >
        <p>{pokemon.name === "mew" ? <p>???</p> : <img src={pokemon.imgSrc} alt="" className={colorCard.cardImg} />}</p>
        <figcaption>bulbasaur</figcaption>
    </figure>
}


const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    }
]

export default pokemonCard;
