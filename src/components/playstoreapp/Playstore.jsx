import React from 'react'
import {assets} from '../../assets/assets';
import './Playstore.css';
const Playstore = () => {
  return (
    <div className='playstore'> 
      <h1>For Better Experience Download Zomoto App</h1>
      <div className="playstore-img">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default Playstore
