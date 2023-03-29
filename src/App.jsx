import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"


function App() {
  const PokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    }
  ]


  return (
    <div>
      <PokemonCard Pokemon={PokemonList[1]} />
    </div>

  );

}

export default App



