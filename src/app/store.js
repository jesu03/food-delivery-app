import {configureStore} from '@reduxjs/toolkit';
import foodReducer from '../slices/foodSlice'; 
import priceReducer from '../slices/priceSlice';
const store = configureStore({
    reducer:{
        foodInfo : foodReducer,
        priceInfo : priceReducer
    }
}) 

export default store;