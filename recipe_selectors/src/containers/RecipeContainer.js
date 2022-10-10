import { useState, useEffect } from "react";

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
        <header></header>
        
        
        </>

    )


}
export default RecipeContainer;