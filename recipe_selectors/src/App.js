import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RecipeContainer from './containers/RecipeContainer';
import AppContainer from './containers/AppContainer';
import UserContainer from './containers/UserContainer'
import AddNewRecipeForm from './components/AddNewRecipeForm'
import SingleRecipe from './components/SingleRecipe';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const [recipeId, setRecipeId] = useState()

  const selectRecipe = id => {
    setRecipeId(id)
  }

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<AppContainer />}/>
        <Route path='/recipes' element={<RecipeContainer />} />
        <Route path='/addnewrecipe' element={<AddNewRecipeForm/>} />
        <Route path='/account' element={<UserContainer />} />
        <Route path="/recipes/:recipeId" element={<SingleRecipe selectRecipe={selectRecipe} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
