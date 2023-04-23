
import React from 'react';
import { Link } from 'react-router-dom';
import data from './data.json';
import HamburgerMenu from '../components/HamburgerMenu';

function ItemList() {
  return (
    <div>
      <div className='Header'>
          <h1><Link to="/home" className='LogoLink'>Yogasan</Link></h1>
          <HamburgerMenu/>
        </div>
      <h2 className='standingPoseHeading'>Standing Poses</h2>
        {data.items.map((item) => (
          <div className='itemListMain'>
            <div className='itemListContainer'>
                <div key={item.id}>
                  <img src={item.image} alt=""/>
                </div>  
                <p key={item.id}>
                  <Link className='ItemName' to={`/sub-items/${item.id}`}>{item.name}</Link>
                </p>
            </div>
          </div>     
        ))}
    </div>
  );
}

export default ItemList;
