import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { assets } from '../../assets/assets'
// import '../fooditem/FoodItem.css'
import './Card.css'
import { FaAmazonPay } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { setPrice } from '../../slices/priceSlice';
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { removeFood } from '../../slices/foodSlice';
const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const foods = useSelector((state) => state.foodInfo.food);
    const totalPrice = foods.reduce((one,sec) => one + sec.price,0);
    //console.log("total price "+ totalPrice);
    const handlePay = () =>{
        dispatch(setPrice(totalPrice));
        navigate("/pay")
    }
    const handleDelete = (id) =>{
        dispatch(removeFood(id));
        console.log(id);
    }
    return (
        <div >
            <hr />
            {
                foods.map((item, index) => {
                    return (
                        <div className='foodd-item'  key={index}>
                            <div className="food-tem-img-container">
                                <img className='food-item-image' src={item.image} alt='' />
                            </div>
                            <div className="food-item-info">
                                <div className="food-item-name-rating">
                                    <p>{item.name}</p>
                                    <img src={assets.rating_starts} alt="" />
                                </div>
                                <p className="food-item-desc">{item.description}</p>
                                <p className="foot-item-price">${item.price}</p>
                                <li className='cart-can'><FaTrashCanArrowUp onClick={() =>handleDelete(item.id)}/></li>
                            </div>
                        </div>
                )})
            }
             {
                foods.length != 0 ?  <p className="pay-icon" onClick={handlePay}><FaAmazonPay /></p> : <h2 className='no-cart'>No items in your cart</h2>
             }
        </div>
                    )
                }

export default Cart
