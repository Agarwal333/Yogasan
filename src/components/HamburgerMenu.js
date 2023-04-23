import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="hamburger-menu">
      <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <nav className='HamburgerNav'>
          <ul>
            <li><Link to="/anatomy">Anatomy</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/">Logout</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
