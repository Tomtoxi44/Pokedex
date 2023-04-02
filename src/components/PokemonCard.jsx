import ColorCard from './PokemonCard.module.css'
import PropTypes from 'prop-types'

{/* <figure className={colorCard.plante}>
<img src={pokemon.imgSrc}
alt={pok}
className={colorCard.cardImg} />
<figcaption>bulbasaur</figcaption>
</figure> */}


// className={colorCard.plante}






const PokemonCard = ({ pokemon }) => {
    const type = pokemon.type

    return <figure className = {ColorCard.plante} >
        <p>{pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt="" className={ColorCard.cardImg} />}</p>
        <figcaption>{pokemon.name}</figcaption>
    </figure>
}


PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    })
}









export default PokemonCard;
