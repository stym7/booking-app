import './navbar.scss';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <Link to="/" className='logo'>Booking.com</Link>
            <div className="navItem">
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar