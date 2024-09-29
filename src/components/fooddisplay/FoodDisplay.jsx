import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../fooditem/FoodItem';
import './FoodDisplay.css'
const FoodDisplay = () => {
    const {food_list,menu_list} = useContext(StoreContext);
    //console.log(menu_list);
    //console.log(useContext(StoreContext));
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
            {
                food_list.map((item,index)=>{
                    return <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay
