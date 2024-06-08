import { configureStore } from "@reduxjs/toolkit";
import myProductReducer from '../Redux/ProductSlice'
import myCartReducer from '../Redux/MyCartSlice'


export const myStore = configureStore({
    reducer:{
        product:myProductReducer,
        cart:myCartReducer
    }
})