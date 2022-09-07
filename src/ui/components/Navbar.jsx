import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className='nav__main'>
      <div className='nav__logo'>
      <a>Tacones</a>
      </div>

      <div className="nav__options">
        <NavLink className="navbar__item" to="/shop">Shop</NavLink>
        <NavLink className="navbar__item" to="/about">About</NavLink>
        <NavLink className="navbar__item" to="/contact">Contact</NavLink>
      </div>

      <div className='nav__search'>
        <p>Search...</p>
      </div>
      
    </nav>
  );
}

