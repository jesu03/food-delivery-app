import React from 'react'
import './Footer.css';
import {assets} from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-content">
    <div className="footer-left">
           <img src={assets.logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum praesentium odit aut, cumque earum obcaecati eveniet voluptatem quasi labore nostrum repellat nemo doloremque esse quod veniam cupiditate expedita architecto.</p>
           <div className="footer-left-icon">
           <img src={assets.facebook_icon} alt="" />
           <img src={assets.twitter_icon} alt="" />
           <img src={assets.linkedin_icon} alt="" />
           </div>
      </div>
      <div className="footer-mid">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
      </div>
      <div className="footer-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+2-212-456-7890</li>
            <li>contact@zomoto-com</li>
           </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer
