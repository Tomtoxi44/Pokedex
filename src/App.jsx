import { useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"

function App() {
  const PokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {

      name: "charmander",

      imgSrc:

        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

    },

    {

      name: "squirtle",

      imgSrc:

        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",

    },

    {

      name: "pikachu",

      imgSrc:

        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

    },
    {
      name: "mew",
    }
  ]


  const [pokemonIndex, setpokemonIndex] = useState(0);

  const handleSuivant = () => {
    setpokemonIndex(pokemonIndex + 1)
  }
  const handlePrecedent = () => {
    setpokemonIndex(pokemonIndex - 1)
  }

  return (

    <div>
      <NavBar suivant={handleSuivant} precedent={handlePrecedent} index={pokemonIndex} />
      <PokemonCard pokemon={PokemonList[pokemonIndex]} />

    </div>

  );

}

export default App



