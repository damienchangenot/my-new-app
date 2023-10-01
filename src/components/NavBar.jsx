import PropTypes from "prop-types";

function NavBar({pokemonIndex, pokemonList, handleNext, handlePrevious}){
    NavBar.propTypes = {
        pokemonIndex: PropTypes.number.isRequired,
        pokemonList: PropTypes.array.isRequired,
        handleNext: PropTypes.func.isRequired,
        handlePrevious: PropTypes.func.isRequired,
    }

    return <nav>
        { pokemonIndex ? <button  onClick={handlePrevious}>Précèdent</button> : ''}
        { pokemonIndex < pokemonList.length - 1 ? <button  onClick={handleNext}>Suivant</button> : ''}
    </nav>
}

export default NavBar;