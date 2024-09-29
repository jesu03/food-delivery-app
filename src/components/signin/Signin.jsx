import React from 'react'
import './Signin.css'
import { auth, googleProvider } from '../../firebase';
import { useState } from 'react';
const Signin = () => {
  const [user, setUser] = useState(null);
    
    const handleGoogle = async () =>{
        try{
            await auth.signInWithPopup(googleProvider);
            setUser(await auth.currentUser);
        }
        catch(err){
            console.log("error"+ err);
        }
    }
    console.log(user);
  return (
    <div className='page'>
    <main class="main page__main">
    <form class="form main__form" action="javascript:void(0);" method="POST">
      <h3 class="form__title">Login with Social Media or Manually</h3>
      <div class="form__content">
        <div class="form__row">
          <div class="form__col">
            <div class="form__social-btns">
              <ul class="form__list">
              <li class="form__item form__item_google-plus"><a class="form__social-btn"  onClick={handleGoogle}><i class="fa-brands fa-google-plus-g"></i>Google</a></li>
                <li class="form__item form__item_facebook"><a class="form__social-btn"><i class="fa-brands fa-facebook-f"></i>Facebook</a></li>
                <li class="form__item form__item_twitter"><a class="form__social-btn" ><i class="fa-brands fa-twitter"></i>Github</a></li>
              </ul>
            </div>
          </div>
          <div class="form__col">
            <p class="form__separator" aria-label="Or sign in manually."><span class="form__separator-word"></span></p>
          </div>
          <div class="form__col">
            <div class="form__login-content">
              <input class="form__input" type="text" name="uname" placeholder="Username" aria-label="Username"/>
              <input class="form__input" type="password" name="psw" placeholder="Password" aria-label="Password"/>
              <button class="form__submit-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
      <div class="form__btns"><a class="primary-btn" href="#">Sign up</a><a class="primary-btn" href="#">Sign in</a></div>
    </form>
  </main>
    <h2>{user?.displayName}</h2>
    <h2>{user?.email}</h2>
    <img src={user?.photoURL} alt="" />
    </div>
  )
}

export default Signin
