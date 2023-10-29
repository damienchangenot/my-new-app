import { Link } from "react-router-dom";

function GameCard({name})
{
    return <>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
            <img src={"./games/"+name+".png"} alt={name + " image game"} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <div className="card-actions">
                <Link to={`/game/${name}`} className="btn">Détails</Link>
            </div>
        </div>
        </div>
    </>
}

export default GameCard;