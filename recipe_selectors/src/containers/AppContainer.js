import { Link } from "react-router-dom";
import "./AppContainer.css";

const AppContainer = ({recipes}) => {

    const recipeHero = recipes.filter(recipe => recipe.averageRating > 4);

    const mainRecipe = recipeHero[1]

    const rightRecipes = recipeHero.filter((recipe, index) => index !== 1 && index !== recipeHero.length-1)

    return (
        <div className="home">
            {recipes.length >= 1 ? 
            <>
            <div className="up-recipes">
                <div className="recipe-hero main-recipe-hero">
                            <img src={mainRecipe.img} alt={mainRecipe.name} />
                            <h4>{mainRecipe.name}</h4>
                </div>
                <div className="recipe-hero right_sider_recipes">
                    {rightRecipes.map (recipe => {
                    return(
                        <Link to={`/recipes/${recipe.id}`}>
                        <div className="recipe-hero" key={recipe.id}>
                            <img src={recipe.img} alt={recipe.name} />
                            <h4>{recipe.name}</h4>
                        </div>
                        </Link>
                    )
                    })}
                </div>
            </div>
            </>
           : <div></div> }
        </div>
    )
}

export default AppContainer