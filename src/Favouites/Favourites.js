import React from 'react';
import { useSelector } from 'react-redux';
import FavouriteSlice from '../redux/FavouriteSlice';
import store from '../redux/store';
import FavouriteItem from './FavouriteItem';

const Favourites=()=>{

    const favourites= useSelector((store)=>store.Favourite.favourites);
    console.log(favourites.length)

    var message="";

    if(favourites.length == 0){

        message= <h2 style={{color:'purple'}}> No Items in Favourites  </h2>

    }


    return(
       <div style={{marginTop:'50px'}}>
        
         {message}

{ favourites.length > 0 &&  <h5 style={{color:"purple"}}>Favourite Recipies</h5>}
        {
            favourites.length > 0 &&
            favourites.map((item)=>{
             return <FavouriteItem id={item.id} name={item.name} image={item.image}/>
            })
        }


       </div>

    )
}

export default  Favourites;