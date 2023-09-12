import { Link } from 'react-router-dom'
import AddPupForm from './AddPupForm'

const Pups = ({ pups }) => {
    return (
      <div>
        <h1>Players</h1>
        <AddPupForm/>
        <ul>
          {
            pups.map( pup => {
              return (
                <li key={pup.id}>
                  <Link to={`/pups/${pup.id}`}>
                    {
                        pup.name
                    }
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  };

export default Pups