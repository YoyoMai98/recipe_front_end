import { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList";
import AddNewRecipeForm from "../components/AddNewRecipeForm";
import Search from "../components/Search";
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom";


const access_key = "mEi0nGTNsKAjv7GHdhxfSw_aZfkwEES1J1I-NApn6OY"

const RecipeContainer = ({recipes, setRecipes, filterRecipe, filteredRecipes, postUser, searchTerm, setSearchTerm}) => {

const navigate = useNavigate()

    const [ingredients, setIngredients] = useState([])
    const [clicked, setClicked] = useState(false)

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

    const onClick = () => {
        setClicked(true)
    }

    useEffect(() => {
        fetchRecipes()
        fetchIngredients()
    },[])

    const addNewRecipe = async (newRecipe, ingredientIds) => {
        let params = ""
        for(let i = 0; i < ingredientIds.length; i++){
            if(i === 0) params = "ingredientsId=" + ingredientIds[i]
            else params += "&ingredientsId=" + ingredientIds[i]
        }
        const response = await fetch("http://localhost:8080/recipe?"+params, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRecipe)
        })
        const savedRecipe =  await response.json()
        setRecipes([...recipes, savedRecipe])
        navigate("/recipes")
    }

    return (
        <>
        <Search filterRecipe={filterRecipe} className="recipes_search" searchClassName="recipe-search-container" searchCardClassName="" searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <RecipeList recipes={filteredRecipes.length > 0 ? filteredRecipes : recipes}/>
        <div className={clicked ? "hidden" : "footer_add_recipe"}>
            <h2>Feeling creative to share your recipe?</h2>
            <button onClick={onClick}>Add new recipe</button>
        </div>
        {clicked? (
            <AddNewRecipeForm ingredients={ingredients} addNewRecipe={addNewRecipe}/>
        ) : <p className="hidden"></p>}
       <Footer postUser={postUser}/>
        </>

    )


}
export default RecipeContainer;