import {Link} from 'react-router-dom'
import { logOut } from '../utils/user-services'

function NavBar({user, setUser}){
    const handleLogOut = () => {
        logOut()
        setUser(null)
    }
    function capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return(
        <nav>
            <Link to = '/orders'>Order History</Link>
            &nbsp; | &nbsp; 
            <Link to='/orders/new'>New Order</Link>
            &nbsp; | &nbsp; 
            <Link to ="" onClick={handleLogOut}>LogOut</Link>
            &nbsp; | &nbsp; 
            <h1>Welcome {capitalize(user.name)}</h1> 
        </nav>
    )
}

export default NavBar