import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const access_key = "mEi0nGTNsKAjv7GHdhxfSw_aZfkwEES1J1I-NApn6OY"

const SingleRecipe = () => {

    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState()

    const fetchSingleRecipe = async () => {
        const response = await fetch("http://localhost:8080/recipe/" + recipeId)
        const recipeData = await response.json()
    
        if(!recipeData.img) {
            recipeData.img = await fetchImages(recipeData.name.toLowerCase())
        }
        setRecipe(recipeData)
    }
    
    const fetchImages = async search => {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${access_key}`)
        const imageData = await response.json()
        imageData.results.sort()
        return imageData.results[1].urls.regular
    }

    useEffect(() => {
        fetchSingleRecipe()
    }, [])
    
    return (
        <div className="singleRecipeCard">
            {recipe? 
            <>
            <img src={recipe.img} alt={recipe.name} />
            <div className="information">
                <h3>{recipe.name}</h3>
                <h4>Average rating: {recipe.avergeRating}</h4>
                <h4>Ingredients</h4>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => {
                        console.log(recipe);
                        return <li key={index}>{ingredient.name}</li>
                    })}
                </ul>
                <p>Servings: {recipe.servings}</p>
                <p>Calories: {recipe.calories}</p>
                <p>Gluten: {recipe.glutenFree ? "Yes" : "No"}</p>
                <p>Vegan: {recipe.vegan ? "Yes" : "No"}</p>
                <p>Vegetarian: {recipe.vegetarian ? "Yes" : "No"}</p>
            </div>
            </> 
             : <p></p> }
        </div>
    )
}

export default SingleRecipe