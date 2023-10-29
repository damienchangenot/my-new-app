import axios from "axios";

const base = 'https://pokeapi.co/api/v2';

async function apiFetch(endpoint)
{
    try {
         const response  = await axios.get(base + endpoint+"?limit=60")

         return response.data
    }catch(error){
         console.log(error.message)
    };
}

export default apiFetch;