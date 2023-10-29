import { useEffect, useState } from "react";
import  apiFetch  from "../utils/fetch";
import GameCard from "./GameCard";
function GameList()
{
    const [gameList, setGameList ] = useState([]);

    useEffect(() => {
        apiFetch('/version').then((data) => {
            console.log(data);
          setGameList(data.results);
        });
      }, []); 
    const dlc = gameList.filter(function(game){
      return game.name.startsWith('the-')
    })
    const games = gameList.filter(function(game){
      return !game.name.startsWith('the-')
    })
    return <>
        <h1>Jeux</h1>
        <div className="grid grid-cols-4 gap-4">
          {games.map((game, index) => {
              
              return <GameCard key={game.name} name={game.name}></GameCard>
          })}
        </div>
    </> ;
}

export default GameList;