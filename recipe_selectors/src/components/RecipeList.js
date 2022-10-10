import Recipe from "./Recipe"
import "./RecipeList.css"

const RecipeList = ({recipes}) => {

    const recipeComponents = recipes.map(recipe => {
        return <Recipe
                key={recipe.id}
                recipe={recipe}
                // addRecipe={addRecipe}
                // selectRecipe={selectRecipe}
                // deleteRecipe={deleteRecipe}
                />
    })
    return (
        <div className="recipe_list">
            <h2>List of Recipes</h2>
            <hr />
            <div className="recipe_list_component">
                {recipeComponents}
            </div>
        </div>
    )
}
export default RecipeList;