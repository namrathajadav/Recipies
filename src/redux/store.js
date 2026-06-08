import { configureStore } from "@reduxjs/toolkit";
import FavouriteReducer from './FavouriteSlice';



const store=configureStore({
    reducer:{
        Favourite:FavouriteReducer

    }
})


export default store;