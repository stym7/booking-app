import './navbar.scss';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className='logo'>Booking.com</Link>
        <div className="navItem">
          <Link to="/signup">
            <button className='navButton'>Register</button>
          </Link>
          <Link to="/login">
            <button className='navButton'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar