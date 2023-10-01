import PropTypes from "prop-types";

function NavBar({pokemonList, handleClick}){
    NavBar.propTypes = {
        pokemonList: PropTypes.array.isRequired,
        handleClick: PropTypes.func.isRequired
    }
    
    return <nav>
        {pokemonList.map((pokemon, index) => {
           return <button onClick={() => handleClick(index)} key={pokemon.name}>{pokemon.name}</button>
        })}
    </nav>
}

export default NavBar;