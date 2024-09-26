import React from 'react'
import './Front.css'
import {assets} from '../../assets/assets';
import {useNavigate} from 'react-router-dom'
import Signin from '../signin/Signin';
import { useState } from 'react';

const Front = () => {
    const navigate = useNavigate();
    const [res, setres] = useState(false);
    
    const handleSignin = () =>{
        setres(true);
    }   
  return (
    <div className='signin'>
      <nav>
      <img src={assets.logo} style={{height:'24px'}} alt="" onClick={()=>setres(false)} />
        <ul>
         <button onClick={handleSignin}>sign in</button>
        </ul>
      </nav>
      <div className='sign-com'>
      {res ? <Signin/> : null}
      </div>
      
    </div>
  )
}

export default Front
