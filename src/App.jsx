import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart.jsx';
import Home from './Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Payment from './components/payment/Payment.jsx';
import Signin from './components/signin/Signin.jsx';
import Front from './components/front/Front.jsx';
const HeaderWrapper = () => {
  const location = useLocation();
  return location.pathname !== '/' ? <Navbar /> : null;
};
  
const App = () => {
  return (
    <BrowserRouter>
     <Routes> <Route path='/' element={<Front/>} /> </Routes> 
    <div className='app'>
            <HeaderWrapper />
            <Routes> 
              <Route path='/home' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/pay' element={<Payment />} />
            </Routes>
          </div>
        <Routes>
        <Route path='/home' element={<Footer />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
