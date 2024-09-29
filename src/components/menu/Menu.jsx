import React from 'react'
import './Menu.css';
import { menu_list } from '../../assets/assets';
import { useState } from 'react';
const Menu = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
      <div className="explore-menu-list" >
        {
            menu_list.map((item,index) => {
                return(
                    <div onClick={()=>setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}  key={index} className='explore-menu-list-item'>
                     <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                     <p>{item.menu_name}</p>
                    </div>  
                )
            })
        }
      </div>
      <hr/>
    </div>
  )
}

export default Menu
