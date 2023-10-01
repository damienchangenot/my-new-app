import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'
import './App.css'

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
]

function App() {
  const [ pokemonIndex , setIndex ] = useState(0);

  function handleClick(index, pokemon)
  {
    setIndex(index);
    {pokemon.name === 'pikachu'  ? alert('pikachu') : ''};
  }

  useEffect(
    () => {
      alert('Hello Sacha');
    }
  )
  return (
    <div>
      <NavBar pokemonList={pokemonList} handleClick={handleClick}></NavBar>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}></PokemonCard>
    </div>
  );
}

export default App
