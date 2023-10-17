import "./NavBar.css";

function NavBar({ setPokemonIndex, pokemonIndex, pokemonList }) {
  {
    pokemonIndex === 3 ? alert("pika pikachu!!!") : "";
  }
  const clickName = (pokeplus) => {
    setPokemonIndex(pokemonList.indexOf(pokeplus));
  };
  return (
    <>
      {pokemonList.map((pokeplus) => (
        <button onClick={() => clickName(pokeplus)} key={pokeplus.name}>
          {pokeplus.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
