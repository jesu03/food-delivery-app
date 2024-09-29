import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    prico : 0,
}

export const priceSlice = createSlice({
      initialState,
      name:'prico',
      reducers:{
        setPrice : (state,action) => {
            state.prico = action.payload;
            console.log("state price value "+state.prico);
        }
      }
})

export const {setPrice} = priceSlice.actions;
export default priceSlice.reducer;
