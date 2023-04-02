import { useEffect, useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"


function App() {
  const PokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      type: "plante",
    },
    {

      name: "charmander",

      imgSrc:

        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        type: "feu",
    },

    {

      name: "squirtle",

      imgSrc:

        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        type: "eau",
    },

    {

      name: "pikachu",

      imgSrc:

        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        type: "elec"
    },
    {
      name: "mew", 
      type: "???",
    }
   
  ]


  useEffect(
    () => {
      alert("hello pokemon trainer")
    },
    []
  )


  const [pokemonIndex, setpokemonIndex] = useState(0);


  if (PokemonList[pokemonIndex].name === "pikachu") {
    setTimeout(() => {
      alert("pika pikachu !!!")
    },
      120)
  }





  const handleSuivant = () => {
    setpokemonIndex(pokemonIndex + 1)
  }
  const handlePrecedent = () => {
    setpokemonIndex(pokemonIndex - 1)
  }

  return (

    <>
    <div>
       <NavBar pokemonIndex={pokemonIndex} setpokemonIndex={setpokemonIndex} pokemon={PokemonList} suivant={handleSuivant} precedent={handlePrecedent} index={pokemonIndex} />
      </div>
    <div >

      <PokemonCard pokemon={PokemonList[pokemonIndex]} />
    </div>
    </>
  );

}

export default App



