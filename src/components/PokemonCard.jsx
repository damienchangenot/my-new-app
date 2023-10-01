import PropTypes from "prop-types";

function PokemonCard(props) {
    const { pokemon } = props;
    return (
        <figure>
            { pokemon.imgSrc === undefined ? <p>???</p> : <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur img" /> }
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    })
}

export default PokemonCard;