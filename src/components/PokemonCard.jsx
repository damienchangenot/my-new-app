import PropTypes from "prop-types";

function PokemonCard(props) {
    const { pokemon } = props;
    return (
        <figure>
            { pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt={pokemon.name + ' img'} /> }
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