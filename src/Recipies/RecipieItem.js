import React from 'react';
import item from './RecipieItem.css';
import { useNavigate } from 'react-router-dom';

const RecipieItem=(props)=>{

    const navigate=useNavigate();

    const goToRecipieDetailHandler=()=>{
        navigate(`../recipiedetail/${props.recipie.id}`);
    }


    return(
     <span style={{color:'black',fontSize:'16px',display:'inline-block',marginBottom:'20px'}} >
     <img src={props.recipie.image}  style={{width:"250px",height:"200px"}} onClick={goToRecipieDetailHandler}
     /><br/>
            <p>
             {props.recipie.name}</p><br/>
            </span>
    )
}

export default RecipieItem;