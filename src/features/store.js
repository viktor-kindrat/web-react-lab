import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./cart/cartReducer.js";
import authReducer, {initialState as authInitialState} from "./auth/authReducer.js";


const loadCartFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) {
            return {cart: []};
        }
        return {cart: JSON.parse(serializedState)};
    } catch (error) {
        console.error("Could not load state from localStorage", error);
        return {cart: []};
    }
};

const loadAuthFromLocalstorage = () => {
    try {
        const serializedState = localStorage.getItem('auth');
        if (serializedState === null) {
            return {auth: authInitialState};
        }
        return {
            auth: JSON.parse(serializedState)
        };
    } catch (error) {
        console.error("Could not load state from localStorage", error);
        return {auth: authInitialState};
    }
};

const preloadedState = {...loadCartFromLocalStorage(), ...loadAuthFromLocalstorage()}

export default configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    },
    preloadedState
})