import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/pups'>Players</Link>
        </div>
    )

}

export default Nav