// src/components/SubItemList.js

import React from 'react';
import { useParams } from 'react-router-dom';
import data from "./data.json";
import { Link } from 'react-router-dom';
import HamburgerMenu from '../components/HamburgerMenu';


function SubItemList() {
  const { itemId } = useParams();

  const item = data.items.find((item) => item.id === parseInt(itemId));
  const subItems = item.subItems;

  return (
    <div className='subItemMain'>
        <div className='Header'>
          <h1><Link to="/home" className='LogoLink'>Yogasan</Link></h1>
          <HamburgerMenu/>
        </div>
        
      <h2>{item.name}</h2>
        {subItems.map((subItem) => (
          <div>
            <div className='subItemList'>
              <p key={subItem.id}>Name of pose: {subItem.name}</p>
              <p key={subItem.id}>Containdications: {subItem.contraindicationsList}</p>
              <p key={subItem.id}>Counter Pose: {subItem.counterPose}</p>
              <p key={subItem.id}>Pronunciation: {subItem.pronunciation}</p>
              <p key={subItem.id}>Steps to do the pose: {subItem.steps}</p>     
            </div>
          </div>
        ))}  
        <Link className='backBtn' to="/itemList"><p className='backBtn'>Back</p></Link>
    </div>
  );
}


export default SubItemList;
