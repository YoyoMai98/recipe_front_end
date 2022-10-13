import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "./Footer"
import "./SingleRecipe.css"


const access_key = "mEi0nGTNsKAjv7GHdhxfSw_aZfkwEES1J1I-NApn6OY"

const SingleRecipe = ({user, addFaveRecipe, loggedInUser, postUser}) => {

    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState()
    const [faveRecipe, setFaveRecipe] = useState()
    const [className, setClassName] = useState("hidden")

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
    const handleClick = () => {
        if(!user){
            setClassName("display")
            return
        }
        setFaveRecipe(recipe)
        if(user.favRecipes.find(recipe => recipe.id === parseInt(recipeId))){
            setFaveRecipe()
        }else{
            addFaveRecipe(parseInt(recipeId), user.userId)
        }
    }

    useEffect(() => {
        fetchSingleRecipe()
    }, [])
    
    return (
        <>
        <div className="singleRecipeCard">
            {recipe? 
            <>
            <div className="recipe_name">
                <h3>{recipe.name}</h3>
            </div>
            <div className="recipe_container">
                <div className="recipe-image">
                    <img src={recipe.img} alt={recipe.name} />
                </div>
                <div className="information">
                    <h4>Average rating: {recipe.averageRating}</h4>
                    <h4>Ingredients</h4>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => {
                            return <li key={index}>{ingredient.name}</li>
                        })}
                    </ul>
                    <p>Servings: {recipe.servings}</p>
                    <p>Calories: {recipe.calories}</p>
                    <p>Gluten: {recipe.glutenFree ? "Yes" : "No"}</p>
                    <p>Vegan: {recipe.vegan ? "Yes" : "No"}</p>
                    <p>Vegetarian: {recipe.vegetarian ? "Yes" : "No"}</p>
                    <div className = "favourite_button">
                        <button onClick={handleClick}>Add to Favourites &#9829; </button>
                        <p className={className}>Please Log In</p>
                     </div>
                </div> 
            </div>
            </> 
             : <p></p> }
        </div>
        <Footer loggedInUser={loggedInUser} postUser={postUser}/>
        </>
    )
}

export default SingleRecipe