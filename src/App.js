
import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Recipies from './Recipies/Recipies';
import RecipieDetailItem from './Recipies/RecipieDetailItem';
import axios from 'axios';
import Favourites from './Favouites/Favourites';

function App() {

  const [recipies,setRecipies]=useState([]);
  
      useEffect(()=>{
          
          axios.get(`https://dummyjson.com/recipes`)
          .then((res)=>{
              return res.data
             
          }).then((data)=>{
  
             setRecipies(data.recipes);
             console.log(recipies);
  
          })
  
      },[]);


  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header/>
          <Routes>
            <Route path='/recipies' element={<Recipies />}/>
             <Route path='/recipiedetail/:id' element={<RecipieDetailItem recipies={recipies}/>}/>
             <Route path='/favourites' element={<Favourites/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
