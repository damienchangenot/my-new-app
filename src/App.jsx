import { useState } from 'react'
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

  function handlePrevious() {
    setIndex( pokemonIndex - 1)
  }
  function handleNext(){
      setIndex( pokemonIndex + 1)
  }
  
  return (
    <div>
      <NavBar pokemonIndex={pokemonIndex} pokemonList={pokemonList} handleNext={handleNext} handlePrevious={handlePrevious}></NavBar>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}></PokemonCard>
    </div>
  );
}

export default App
