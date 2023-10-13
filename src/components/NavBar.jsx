import "../components/NavBar.css";

function NavBar({ previousButton, nextButton, handleNext, handlePrevious }) {
  return (
    <div className="NavBar">
      {previousButton && (
        <button className="button" onClick={handlePrevious}>
          Précédent
        </button>
      )}

      {nextButton && (
        <button className="button" onClick={handleNext}>
          Suivant
        </button>
      )}
    </div>
  );
}

export default NavBar;
