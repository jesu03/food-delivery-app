import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    food : [],
}
export const foodSlice = createSlice({
    name:'food',
    initialState,
    reducers:{
        addFood : (state,action) =>{
            state.food = [...state.food,action.payload];
        },
        //state holding the current state value
        //action having the user sending value
        removeFood : (state,action) =>{
            console.log(action.payload);
            state.food = state.food.filter(num => num.id !== action.payload);
        },
    }
})

export const {addFood,removeFood} = foodSlice.actions;
export default foodSlice.reducer;