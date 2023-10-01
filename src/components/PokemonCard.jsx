function PokemonCard(props) {
    const { pokemon } = props;
    return (
        <figure>
            { pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt="Bulbasaur img" /> }
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

export default PokemonCard;