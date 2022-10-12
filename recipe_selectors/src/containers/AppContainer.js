import { Link } from "react-router-dom";
import Search from "../components/Search";
import "./AppContainer.css";

const AppContainer = ({recipes, filterRecipe}) => {

    const recipeHero = recipes.filter(recipe => recipe.averageRating > 4);

    const mainRecipe = recipeHero[1]

    const rightRecipes = recipeHero.filter((recipe, index) => index !== 1 && index !== recipeHero.length-1)

    return (
        <>
        <Search filterRecipe={filterRecipe} className="home_search"/>
        <div className="home">
            {recipes.length >= 1 ? 
            <>
            <div className="up-recipes">
                <div className="recipe-hero main-recipe-hero">
                <Link to={`/recipes/${mainRecipe.id}`} >
                            <img src={mainRecipe.img} alt={mainRecipe.name} />
                            <h4>{mainRecipe.name}</h4>
                </Link>
                </div>
                <div className="recipe-hero right_sider_recipes">
                    {rightRecipes.map (recipe => {
                    return(
                    <div className="recipe-hero">
                        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                            <img src={recipe.img} alt={recipe.name} />
                            <h4>{recipe.name}</h4>
                        </Link>
                    </div>
                    )
                    })}
                </div>
            </div>
            </>
           : <div></div> }
        </div>
        </>
    )
}

export default AppContainer