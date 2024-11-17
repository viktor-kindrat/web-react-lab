import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./cart/cartReducer.js";


export default configureStore({
    reducer: {
        cart: cartReducer
    }
})