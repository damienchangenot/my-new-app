import { useParams } from 'react-router-dom';

export default function Game()
{
    const { name } = useParams();

    return <h1>{name}</h1>
}