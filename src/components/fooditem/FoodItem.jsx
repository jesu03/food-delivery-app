import React from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { addFood } from '../../slices/foodSlice';
import { useState } from 'react';
const FoodItem = ({id,name,image,price,description,category}) => {
  const dispatch = useDispatch();
  const [result, setresult] = useState([]);
  const foods = useSelector(state => state.foodInfo.food);
  const handleCart = (item) =>{
    
    const already = foods.some(food => food.id === item.id);
      if(!already){
       dispatch(addFood(item));
       alert("food has been placed!");
      }
      else{
        alert("food already exist!");
      }
  }

  const foodItem = {
    id,
    name,
    image,
    price,
    description
   }
   
   return (
    <div className='food-item'>
      <div className="food-tem-img-container">
        <img className='food-item-image' src={image} alt=''/>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="foot-item-price" >${price}</p>
        <p className="cart-icon" onClick={()=>handleCart(foodItem)}><PiShoppingCartSimpleFill /></p>
      </div>
    </div>
  )
}

export default FoodItem
