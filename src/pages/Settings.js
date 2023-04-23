import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css";
import HamburgerMenu from '../components/HamburgerMenu';


function Settings() {
  return (
    <div className="">
        <div className='Header'>
          <h1><Link to="/home" className='LogoLink'>Yogasan</Link></h1>
          <HamburgerMenu/>
        </div>
        <div className='Settings'>
            <h1>Settings</h1>
            <p>Account</p>
            <p>Share</p>
            <p>Help</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
       
    </div>  
  );
}

export default Settings;
