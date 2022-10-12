import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RecipeContainer from './containers/RecipeContainer';
import Home from './components/Home';
import UserContainer from './containers/UserContainer'
import AddNewRecipeForm from './components/AddNewRecipeForm'
import SingleRecipe from './components/SingleRecipe';
import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {
  const access_key = "mEi0nGTNsKAjv7GHdhxfSw_aZfkwEES1J1I-NApn6OY"

  const [users, setUsers] = useState([])
  const [onlineUser, setOnlineUser] = useState()
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])
  
  const loggedInUser = chosenUser => {
    if(chosenUser.name==="") setOnlineUser()
    setOnlineUser(chosenUser)
  }
 
  const fetchRecipes = async () => {
      const response = await fetch("http://localhost:8080/recipe");
      const recipeData = await response.json();

      for (let recipe of await recipeData) {
          if (!recipe.img) {
              recipe.img = await fetchImages(recipe.name.toLowerCase())
          }
      }
      setRecipes(recipeData);
  }

  const fetchImages = async search => {
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${access_key}`)
      const imageData = await response.json()
      imageData.results.sort()
      return imageData.results[1].urls.regular
  }

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:8080/users");
        const userData = await response.json();
        setUsers(userData);
    }

  const postUser = async newUser => {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
      })
      const savedUser =  await response.json()
      setUsers([...users, savedUser])
  }

  useEffect(() => {
    fetchRecipes()
    fetchUsers()
  },[]) 

  const filterRecipe = (searchTerm) => {
        const filtered = recipes.filter (recipe =>{
            return recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setFilteredRecipes(filtered)
        if (searchTerm === "") setFilteredRecipes([])
    }

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home recipes={recipes} filterRecipe={filterRecipe} />}/>
        <Route path='/recipes' element={<RecipeContainer recipes={recipes} setRecipes={setRecipes} filterRecipe={filterRecipe} filteredRecipes={filteredRecipes}/>} />
        <Route path='/addnewrecipe' element={<AddNewRecipeForm/>} />
        <Route path='/account' element={<UserContainer onlineUser={onlineUser} loggedInUser={loggedInUser} users={users} />} />
        <Route path="/recipes/:recipeId" element={<SingleRecipe />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
