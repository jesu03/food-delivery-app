import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState,useEffect } from 'react'    
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [men, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.zomoto} alt="" className="logo" onClick={()=>navigate('/home')} />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={men==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={men==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={men==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={men==="contact-us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.bag_icon} alt="" onClick={()=>navigate('/cart')} />
            <div className="dot"></div>
        </div>
        <button onClick={() => navigate("/")}>log out</button>
      </div>
    </div>
  )
}

export default Navbar
