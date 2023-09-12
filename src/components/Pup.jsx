import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Pup = ({pups})=> {
    const params = useParams();
    const id = params.id*1;
    const navigate = useNavigate()
  
    const pup = pups.find(pup => pup.id === id);
    console.log(pup)
  
    if(!pup) {
      return null;
    }
    
    async function handleDelete(){
        const result = await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players/${id}`)
        navigate('/')
        console.log(result)

    }

    return (
      <div>
        <h1>{pup.name}</h1>
        <h2>{pup.breed}</h2>
        <div>Status: {pup.status}</div>
        <button onClick={handleDelete}>Delete</button>
        <hr/>

      <Link to='/pups'>Back to All Players
      </Link>
      </div>
    )
  };

export default Pup