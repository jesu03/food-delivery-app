import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';
const Rest = () => {
    const okk = localStorage.getItem("auth");
    if(!okk){
      return <Navigate to="/" />
    }
    else{
      return <Outlet/>
    }
}

export default Rest
