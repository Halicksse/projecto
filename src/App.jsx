import React, { useState } from "react";
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

  function handlePrevious() {
    setPokemonIndex(pokemonIndex - 1);
  }

  function handleNext() {
    setPokemonIndex(pokemonIndex + 1);
  }

  const previousButton = pokemonIndex > 0;
  const nextButton = pokemonIndex < pokemonList.length - 1;
  
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        previousButton={previousButton}
        nextButton={nextButton}
        handlePrevious={handlePrevious}
        handleNext={handleNext} 
        />
    </div>
  );
}

export default App;