import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets';
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";;
const Header = () => {
  const [overslay, setOverslay] = useState(false);
  return (
    <div className='header'>
      {overslay ? 
      <div>
         <img src={assets.menu} className='menu-img' style={{height:'430px',width:'100%'}} /> 
         <h3 className='menu-close' onClick={()=> setOverslay(false)}><AiOutlineClose/></h3>
      </div>
      : 
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ipsum conswo dwan dummy text ever since the 1500s.</p>
        <button onClick={()=>setOverslay(true)}>View Menu</button>
      </div>
    } 
    </div>
  )
}

export default Header
