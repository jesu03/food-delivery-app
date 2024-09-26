import React from 'react'
import StoreContextProvider from './components/context/StoreContext.jsx';
import Header from './components/header/Header.jsx';
import FoodDisplay from './components/fooddisplay/FoodDisplay.jsx';
import Playstore from './components/playstoreapp/Playstore.jsx';
import Menu from './components/menu/Menu.jsx'


const Home = () => {
  return (
    <div>
        <Header />
        <Menu />
        <StoreContextProvider>
          <FoodDisplay />
        </StoreContextProvider>
        <Playstore />
    </div>
  )
}

export default Home
