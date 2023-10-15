import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar.jsx";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
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
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
 
  const selectPokemon = (selectedPokemon) => {
    setPokemonIndex(pokemonList.map((pokemon) => pokemon.name ).indexOf(selectedPokemon.name));
};

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        superProps={pokemonList}
        pokemonIndex={pokemonList[pokemonIndex]}
        setPokemonIndex={selectPokemon}
        />
    </div>
  );
}

export default App;