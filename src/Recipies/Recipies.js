
// import { useEffect } from 'react';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Recipies_Item from './RecipieItem';
import RecipieItem from './RecipieItem';
import { Button } from '@mui/material';


const Recipies=()=>{
    
   const [recipies,setRecipies]=useState([]);

   const [showButton,setShowButton]=useState(false);
   const [showButton2,setShowButton2]=useState(false);
   const [showButton3,setShowButton3]=useState(false);



   const [message,setMessage]= useState('');


   const closeAllHandler=()=>{

     
    axios.get(`https://dummyjson.com/recipes`)
        .then((res)=>{
            return res.data
           
        }).then((data)=>{

           setRecipies(data.recipes);
        //    console.log(recipies);

        })
    setShowButton(false);
    setMessage('All Recipies');
   }


   const closeAllHandler2=()=>{

   
    axios.get(`https://dummyjson.com/recipes`)
        .then((res)=>{
            return res.data
           
        }).then((data)=>{

           setRecipies(data.recipes);

        })
    setShowButton2(false);
    setMessage('All Recipies');
   }

   const closeAllHandler3=()=>{

   
    axios.get(`https://dummyjson.com/recipes`)
        .then((res)=>{
            return res.data
           
        }).then((data)=>{

           setRecipies(data.recipes);

        })
    setShowButton3(false);
    setMessage('All Recipies');
   }



    useEffect(()=>{
        axios.get(`https://dummyjson.com/recipes`)
        .then((res)=>{
            return res.data
           
        }).then((data)=>{

           setRecipies(data.recipes);
        //    console.log(recipies);

        })

    },[]);

    const showAllHandler=()=>{

        setMessage(`All Recipies`);

         axios.get(`https://dummyjson.com/recipes`)
        .then((res)=>{
            return res.data
           
        }).then((data)=>{

           setRecipies(data.recipes);

        })


    }
    


    const filterMealTypeHandler=(mealType)=>{

        setMessage(`${mealType} Recipies`);
        
          axios.get(`https://dummyjson.com/recipes`)
        .then((res)=>{
            return res.data
           
        }).then((data)=>{
            var meals=[];
            var loadedRecipies=[]
            data.recipes.map((recipie)=>{
               meals=recipie.mealType;
               meals.map((meal)=>{
                if(meal== mealType){
                  loadedRecipies.push(recipie);
                }
               })

            })
           
              setRecipies(loadedRecipies);

        })
    }


    const filterDifficultyHandler=(level)=>{
        setMessage(`${level} Recipies`);


         axios.get(`https://dummyjson.com/recipes`)
        .then((res)=>{
            return res.data
           
        }).then((data)=>{

           
            var loadedRecipies=[]
            data.recipes.map((recipie)=>{
                 if(recipie.difficulty == level){
                    loadedRecipies.push(recipie)
                 }

            })
             setRecipies(loadedRecipies);

        })
    }
    

    const filterCuisineHandler=(cuisine)=>{
        setMessage(`${cuisine} Recipies`);


         axios.get(`https://dummyjson.com/recipes`)
        .then((res)=>{
            return res.data
           
        }).then((data)=>{

           
            var loadedRecipies=[]
            data.recipes.map((recipie)=>{
                 if(recipie.cuisine == cuisine){
                    loadedRecipies.push(recipie)
                 }

            })
             setRecipies(loadedRecipies);

        })
    }
   
    

    return(
       <>
       <div style={{marginTop:'120px',textAlign:'center'}}>
        <Button variant='contained' style={{backgroundColor:'purple',color:'white'}}
         onClick={()=>{
            setShowButton(false);
            setShowButton2(false);
            setShowButton3(false);
            showAllHandler();

         }
          
         }>
            Show All
        </Button>
        <Button variant='contained' color='primary' style={{marginLeft:'10px'}}
         onClick={()=>{
            setShowButton2(false)
            setShowButton3(false)
            setShowButton(true)

         }}>
            Meal Type
        </Button>
        <Button variant='contained' color='error' style={{marginLeft:'10px'}}
         onClick={()=>{
            setShowButton(false);
            setShowButton3(false);
            setShowButton2(true)

         }}>
            Difficulty
        </Button>
        <Button variant='contained' color='success' style={{marginLeft:'10px'}}
         onClick={()=>{
            setShowButton(false);
            setShowButton2(false);
            setShowButton3(true);

         }}>
            Cuisine
        </Button>
       </div>

      { showButton &&
       <div style={{marginTop:'10px'}}>
         <Button variant='contained' color='primary' onClick={showAllHandler}>
           Show All
        </Button>
         <Button variant='contained' color='primary' style={{marginLeft:'10px'}} onClick={()=>filterMealTypeHandler('Breakfast')}>
            Breakfast
        </Button>
        <Button variant='contained' color='primary' style={{marginLeft:'10px'}} onClick={()=>filterMealTypeHandler('Lunch')}>
            Lunch
        </Button>
        <Button variant='contained' color='primary' style={{marginLeft:'10px'}} onClick={()=>filterMealTypeHandler('Dinner')}>
            Dinner
        </Button>
        <Button variant='contained' color='primary' style={{marginLeft:'10px'}} onClick={()=>filterMealTypeHandler('Side Dish')}>
            Side dish
        </Button>
        <Button variant='contained' color='primary' style={{marginLeft:'10px'}} onClick={()=>filterMealTypeHandler('Appetizer')}>
            Appetizer
        </Button>
        <Button variant='contained' color='primary' style={{marginLeft:'10px'}} onClick={()=>filterMealTypeHandler('Beverage')}>
            Beverage
        </Button>
        <Button variant='contained' color='primary' style={{marginLeft:'10px'}} onClick={closeAllHandler}>
           Close All
        </Button>
       </div>
}



       {
        showButton2 && 
       <div style={{marginTop:'10px'}}>
         <Button variant='contained' color='error' onClick={showAllHandler}>
           Show All
        </Button>
         <Button variant='contained' color='error' style={{marginLeft:'10px'}} onClick={()=>filterDifficultyHandler('Easy')}>
            Easy
        </Button>
        <Button variant='contained' color='error' style={{marginLeft:'10px'}} onClick={()=>filterDifficultyHandler('Medium')}>
            Medium
        </Button>
         <Button variant='contained' color='error' style={{marginLeft:'10px'}} onClick={closeAllHandler2}>
            Close All
        </Button>
        </div>
       }



       {
        showButton3 &&
       <div style={{marginTop:'10px'}}>

         <Button variant='contained' color='success' onClick={showAllHandler}>
          Show All
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Italian')}>
           Italian
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Asian')}>
           Asian
        </Button>
        <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('American')}>
           American
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Mexican')}>
            Mexican
        </Button>

         <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Mediterrean')}>
          Mediterrean
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Pakistani')}>
           Pakistani
        </Button>
        <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Japanese')}>
          Japanese
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Korean')}>
           Korean
        </Button>
          <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Greek')}>
          Greek
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Thai')}>
           Thai
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Indian')}>
          Indian
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Turkish')}>
          Turkish
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Smoothie')}>
          Smoothie
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px'}} onClick={()=>filterCuisineHandler('Russian')}>
           Russian
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px',marginTop:"5px"}} onClick={()=>filterCuisineHandler('Lebanese')}>
          Lebanese
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px',marginTop:'5px'}} onClick={()=>filterCuisineHandler('Brazilian')}>
           Brazilian
        </Button>
         <Button variant='contained' color='success' style={{marginLeft:'5px',marginTop:'5px'}} onClick={closeAllHandler3}>
          Close All
        </Button>
        </div>
       }


         <h5 style={{color:'purple'}}>{message}</h5>
        <div style={{marginTop:'10px'}}>
         {
            recipies.map((recipie)=>{
                return <RecipieItem recipie={recipie}/>

            })
         }
        </div>
        </>
       
    
    )
}

export default Recipies;