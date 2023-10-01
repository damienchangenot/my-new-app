const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
]

function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
        <figure>
            { pokemon.imgSrc === undefined ? <p>???</p> : <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur img" /> }
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}


export default PokemonCard;