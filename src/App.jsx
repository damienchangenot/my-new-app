import { useEffect, useState } from 'react'
import PokemonList from './components/PokemonList';
import GameList from './components/GameList';
import Game from './components/Game';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'



function App() {


  return (
    <Router>
      <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a>Link</a></li>
              <li>
                <details>
                  <summary>
                    Parent
                  </summary>
                  <ul className="p-2 bg-base-100">
                    <li><Link to="/liste">Liste Pokémon</Link></li>
                    <li><Link to="/">Accueil</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
      </div>
      
      
      <Routes>
        <Route path="/" element={<PokemonList/>}></Route>
        <Route path="/liste" element={<GameList/>}></Route>
        <Route path="/game/:name" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App
