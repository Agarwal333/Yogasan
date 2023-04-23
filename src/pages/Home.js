import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../components/HamburgerMenu';
import "./style.css";


function Home() {
  return (
    <div className='background'>
       <div className='Header'>
          <h1><Link to="/" className='LogoLink'>Yogasan</Link></h1>
          <HamburgerMenu/>
        </div>
    <div className='Poses'>
        <div className='Posestabs'>
            <Link to="/itemList"><img src='BTN1.png' alt='Standing poses'/></Link>
            <img src='BTN2.png' alt='Standing poses'/>
            <img src='BTN3.png' alt='Standing poses'/>
        </div>
        <div className='Posestabs'>
            <img src='BTN4.png' alt='Standing poses'/>
            <img src='BTN5.png' alt='Standing poses'/>
            <img src='BTN6.png' alt='Standing poses'/>
        </div>
        <div className='Posestabs'>
            <img src='BTN7.png' alt='Standing poses'/>
            <img src='BTN8.png' alt='Standing poses'/>
            <img src='BTN9.png' alt='Standing poses'/> 
        </div>
    </div>
      
      {/* <nav>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav> */}
      
    </div>
  );
}

export default Home;
