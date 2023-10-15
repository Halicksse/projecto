import "./NavBar.css";

function NavBar({ superProps, setPokemonIndex }) {
  return superProps.map((pokemonIndex) => {
    return (
      <button key={pokemonIndex} onClick={() => setPokemonIndex(pokemonIndex)}>
        {pokemonIndex.name}
      </button>
    );
  });
}

export default NavBar;
