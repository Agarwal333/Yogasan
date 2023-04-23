import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css";
import HamburgerMenu from '../components/HamburgerMenu';


function PageNotFound() {
  return (
    <div className="">
      <div className='Header'>
          <h1><Link to="/home" className='LogoLink'>Yogasan</Link></h1>
          <HamburgerMenu/>
        </div>
       
        <h1>Page Not Found</h1>
       
        <img className='AnatomyImg' src='Anatomy.png' alt=''/>
        <img className='AnatomyImg' src='Anatomy.png' alt=''/>
    </div>
  );
}

export default PageNotFound;
