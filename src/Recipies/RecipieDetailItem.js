import React,{useState , useEffect} from 'react';
import detail from './RecipieDetailItem.css';
import { useParams } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import { Button } from '@mui/material';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { checkIsFavourite } from '../redux/FavouriteSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToFavourites } from '../redux/FavouriteSlice';
import FavouriteSlice from '../redux/FavouriteSlice';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const style2= {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height:730,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RecipieDetailItem=(props)=>{


    const dispatch=useDispatch()
    const navigate=useNavigate();

    const [openModal,setOpenModal]=useState(false);
    const [open2,setOpen2]=useState(false);

    const handleClose=()=>{
        setOpenModal(false);
    }

    const handleClose2=()=>{
      setOpen2(false);
    }


    const params=useParams('id');
    console.log(params.id);
     
    const recipieItem=props.recipies.filter((item)=>{
      return item.id==params.id
    });
    
   const favouriteItems=useSelector((store)=>store.Favourite.favourites);

   console.log(favouriteItems.length);

    const addToFavouritesHandler=()=>{
     
        dispatch(addToFavourites(recipieItem[0]));
        navigate('../favourites');


    }

    
     



    return(
        <>
        
        <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:'red'}}>
            How to Prepare {recipieItem[0].name} ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Instructions to prepare {recipieItem[0].name}<br/>

            <img src={recipieItem[0].image}  style={{width:'150px',height:'100px',marginTop:'10px'}} /><br/>
            {recipieItem[0].name} <br/>
            <span  style={{color:'red',marginTop:'20px'}}>Ingredients : </span> <br/>
            {
                recipieItem[0].ingredients.map((i)=>{
                  return   `${i} ,`
                })
            }
            <br/>

            
           <div
             style={{color:'red',marginTop:'10px'}}>
            Instructions to prepare {recipieItem[0].name} </div>
            {
                recipieItem[0].instructions.map((i)=>{
                   return `${i} ,`
                })
            }
            <br/>
    <p style={{textAlign: 'right'}}>
        <Button variant='contained' color='error' onClick={handleClose}>
            Close
        </Button>
          <Button variant='contained' color='success' style={{marginLeft:'10px'}}
          onClick={handleClose}> Ok</Button>
        </p>
            
          </Typography>
        </Box>
      </Modal>


      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:'purple'}}>
            Detailed Recipie
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {recipieItem[0].name} Recipie in detail <br/>

            <img src={recipieItem[0].image}  style={{width:'150px',height:'100px',marginTop:'10px'}} /><br/>
            {recipieItem[0].name} <br/>
            <span  style={{color:'red',marginTop:'20px'}}>Ingredients : </span> <br/>
            {
                recipieItem[0].ingredients.map((i)=>{
                  return   `${i} ,`
                })
            }
            <br/>

            
           <div
             style={{color:'red',marginTop:'10px'}}>
            Instructions to prepare {recipieItem[0].name} </div>
            {
                recipieItem[0].instructions.map((i)=>{
                   return `${i} ,`
                })
            }
            <br/>
            <span style={{color:'red',fontSize:'16px'}}>
              Preparation time in Minutes : 
            </span>
            <span style={{color:'purple',fontSize:'16px'}}>
               {recipieItem[0].prepTimeMinutes}
            </span>
            <br/>
              <span style={{color:'red',fontSize:'16px'}}>
              Cook Time in Minutes :
            </span>
            <span style={{color:'purple',fontSize:'16px'}}>
               {recipieItem[0].cookTimeMinutes}
            </span>
            <br/>
             <span style={{color:'red',fontSize:'16px'}}>
              Servings :
            </span>
            <span style={{color:'purple',fontSize:'16px'}}>
               {recipieItem[0].servings}
            </span>
            <br/>
             <span style={{color:'red',fontSize:'16px'}}>
              Difficulty :
            </span>
            <span style={{color:'purple',fontSize:'16px'}}>
               {recipieItem[0].difficulty}
            </span>
            <br/>
            <span style={{color:'red',fontSize:'16px'}}>
             Cuisine :
            </span>
            <span style={{color:'purple',fontSize:'16px'}}>
               {recipieItem[0].cuisine}
            </span>
            <br/>
            <span style={{color:'red',fontSize:'16px'}}>
             Calories per Serving :
            </span>
            <span style={{color:'purple',fontSize:'16px'}}>
               {recipieItem[0].caloriesPerServing}
            </span>
            <br/>
             <span style={{color:'red',fontSize:'16px'}}>
             Tags :
            </span>
            <span style={{color:'purple',fontSize:'16px'}}>
               {
               recipieItem[0].tags.map((i)=>{
                return `${i} ,`

               })
}

            </span>
            <br/>
             <span style={{color:'red',fontSize:'16px'}}>
             User Id:
            </span>
            <span style={{color:'purple',fontSize:'16px'}}>
               {recipieItem[0].userId}
            </span>
            <br/>
             <span style={{color:'red',fontSize:'16px'}}>
             Ratings :
            </span>
            <span style={{color:'purple',fontSize:'16px'}}>
               <StarRating rating={Math.floor(recipieItem[0].rating)}/>
            </span>
            <br/>
             <span style={{color:'red',fontSize:'16px'}}>
             Review Count :
            </span>
            <span style={{color:'purple',fontSize:'16px'}}>
               {recipieItem[0].reviewCount}
            </span>
            <br/>
             <span style={{color:'red',fontSize:'16px'}}>
             Meal Type :
            </span>
            <span style={{color:'purple',fontSize:'16px'}}>
               {
                recipieItem[0].mealType.map((m)=>{
                 return `${m} ,`
                })
               }
            </span>
            <br/>

    <p style={{textAlign: 'right'}}>
        <Button variant='contained' color='error' onClick={handleClose2}>
            Close
        </Button>
          <Button variant='contained' color='success' style={{marginLeft:'10px'}}
          onClick={handleClose2}>Ok</Button>
        </p>
            
          </Typography>
        </Box>
      </Modal>
        
        
     <div className="split left">

  <div className="centered">
  <img src={recipieItem[0].image} style={{width:'500px',height:'450px'}}/>
  </div>

</div>

<div className="split right">

  <div className="centered">
    <h4>{ recipieItem[0].name }</h4>
    <h5>Ingredients</h5>
    <ul>
        {
            recipieItem[0].ingredients.map((i)=>{
            return <li>{i}</li>
            })
        }
    </ul>

   <h6>
     Ratings : <StarRating rating={Math.floor(recipieItem[0].rating)}/></h6>
     <h6>Review Count : {recipieItem[0].reviewCount}</h6>
     <h6>
     Meal Type :  
       [
     
    
        {
            recipieItem[0].mealType.map((type)=>{
                   return `${type} ,`
            })
        }
        
     ]
     </h6>

     
     
     
  </div>
  <div style={{marginTop:'650px'}}>
  <Button variant='contained' color='success' onClick={()=>setOpenModal(true)}>
     How to Prepare
     </Button>

      <Button variant='contained' color='primary' style={{marginLeft:'8px'}}
      onClick={()=>setOpen2(true)}>
    Show Detail
    </Button>

   
    
     <Button variant='contained' color='error' style={{marginLeft:'8px'}}
     onClick={addToFavouritesHandler}>
        <FaRegHeart/>
        Add to Favourites
        </Button>


  

        
        </div>
</div> 
</>

    )
}

export default RecipieDetailItem;