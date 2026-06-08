import { createSlice } from "@reduxjs/toolkit";

const initialState={
    favourites:[

    ],
    isFavourite:false
    
}

const FavouriteSlice=createSlice({
    name:'favourites',
    initialState,
    reducers:{
        addToFavourites:(state,action)=>{
            state.favourites=[...state.favourites,action.payload]
        },
        removeFromFavourites:(state,action)=>{
            state.favourites=
            state.favourites.filter((item)=>{
               if(item.id!=action.payload){
                return item
               }
            })

        },
        checkIsFavourite:(state,action)=>{
            state.favourites.map((item)=>{
              if(item.id == action.payload){
                state.isFavourite=true
              }else if(item.id != action.payload){
                state.isFavourite=false
              }
            })

            console.log(state.isFavourite);
            
        }
    },

});



export const {addToFavourites , removeFromFavourites , checkIsFavourite} = FavouriteSlice.actions;

export default FavouriteSlice.reducer;