import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeList from "../components/RecipeList";
import IngredientsList from "../components/IngredientsList";
import AddNewRecipeForm from "../components/AddNewRecipeForm";

const access_key = "mEi0nGTNsKAjv7GHdhxfSw_aZfkwEES1J1I-NApn6OY"

const RecipeContainer = () => {

    const [recipes, setRecipes] = useState([])
    const [ingredients, setIngredients] = useState([])

    const fetchRecipes = async () => {
        const response = await fetch("http://localhost:8080/recipe");
        const recipeData = await response.json();

        for(let recipe of await recipeData){
            if(!recipe.img) {
                recipe.img = await fetchImages(recipe.name.toLowerCase())
            }
        }

        setRecipes(recipeData);
    }
    
    const fetchIngredients = async () => {
        const response = await fetch("http://localhost:8080/ingredients");
        const ingredientsData = await response.json();
        setIngredients(ingredientsData);
    }

    const fetchImages = async search => {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${access_key}`)
        const imageData = await response.json()
        imageData.results.sort()
        return imageData.results[1].urls.regular
    }

    useEffect(() => {
        fetchRecipes()
        fetchIngredients()
    },[])

    return (
        <>
        <Header/>
        <RecipeList recipes={recipes}/>
        <IngredientsList ingredients={ingredients}/>
        <AddNewRecipeForm ingredients={ingredients}/>
        <Footer/>
       
        </>

    )


}
export default RecipeContainer;