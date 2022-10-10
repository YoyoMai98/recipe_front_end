import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RecipeContainer = () => {

    const [recipes, setRecipes] = useState([])
    const [ingredients, setIngredients] = useState([])

    const fetchRecipes = async () => {
        const response = await fetch("http://localhost:8080/recipe");
        const recipeData = await response.json();
        setRecipes(recipeData);
    }
    
    const fetchIngredients = async () => {
        const response = await fetch("http://localhost:8080/ingredients");
        const ingredientsData = await response.json();
        setIngredients(ingredientsData);
    }

    useEffect(() => {
        fetchRecipes()
        fetchIngredients()


    
    },[])

    return (
        <>
        <Header/>
        <Footer/>
       
        </>

    )


}
export default RecipeContainer;