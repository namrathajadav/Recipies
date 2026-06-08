import React,{useState} from 'react';
import { Button } from '@mui/material';
import { removeFromFavourites } from '../redux/FavouriteSlice';
import { useDispatch } from 'react-redux';
import FavouriteSlice from '../redux/FavouriteSlice';
import store from '../redux/store';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const FavouriteItem=(props)=>{


    const [open,setOpen]=useState(false);
    const [open2,setOpen2]=useState(false);
    

    const dispatch=useDispatch();

    const openModalHandler=()=>{
        setOpen(true);

    }
    const openModalHandler2=()=>{
        setOpen(false);
        setOpen2(true);

    }
    const handleClose=()=>{
        setOpen(false);
    }

    const handleClose2=()=>{
        setOpen2(false);
    }

    const removeFromFavouritesHandler=()=>{
   
        dispatch(removeFromFavourites(props.id));
    }


    return(
        <>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:'red'}}>
            Remove Recipie from Favourite List
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
            Are You sure want to remove recipie {props.name} from favourite list ? <br/>
            <p style={{textAlign:'right'}}>
            <Button variant='contained' color='error' onClick={handleClose}
              style={{marginRight:'10px'}}
            >No</Button>
            <Button variant='contained' color='success' onClick={openModalHandler2}
            >Yes</Button>
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:'red'}}>
            Removed Recipie from Favourite List
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
            The recipie {props.name} removed successfully from favourite list ? <br/>
             <p style={{textAlign:'right'}}>
            <Button variant='contained' color='error' onClick={handleClose2}  style={{marginRight:'10px'}}
            >Cancel</Button>
            <Button variant='contained' color='success' onClick={removeFromFavouritesHandler}
            >OK</Button>
            </p>
          </Typography>
        </Box>
      </Modal>

       <span style={{fontSize:'16px',display:'inline-block',marginBottom:'20px'}} >
     <img src={props.image}  style={{width:"250px",height:"200px"}}  /><br/>
            <h4 style={{color:"purple"}}>
             {props.name}</h4>

             <Button variant='contained' color='error' onClick={openModalHandler}
             >Remove</Button>
            </span>
  </>

    )
}

export default FavouriteItem;