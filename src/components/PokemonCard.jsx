import colorCard from './PokemonCard.module.css'


const pokemonCard = () => {
    return <figure className={colorCard.plante}>
        <img src={pokemon.imgSrc}
            alt={pok}
            className={colorCard.cardImg} />
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

PokemonCard(pokemonList[0])

export default pokeCard;
