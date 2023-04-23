import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css";
import HamburgerMenu from '../components/HamburgerMenu';


function Anatomy() {
  return (
    <div className="">
        <div className='Header'>
          <h1><Link to="/home" className='LogoLink'>Yogasan</Link></h1>
          <HamburgerMenu/>
        </div>
        <div className='NotFoundContainer'>
            <h1>Page Not Found</h1>
            <div className='NotFoundImage'>
                 <img className='AnatomyImg' src='404.png' alt=''/>
            </div>
        </div>
    </div>
  );
}

export default Anatomy;
