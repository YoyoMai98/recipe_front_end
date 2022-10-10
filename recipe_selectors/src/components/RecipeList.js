import Recipe from "./Recipe"

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
        <>
            <h2>List of Recipes</h2>
            <hr />
            {recipeComponents}
        </>
    )
}
export default RecipeList;