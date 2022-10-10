import "./Recipe.css"

const Recipe = ({recipe}) => {
    return(
            <div className="recipe">
                <h3>{recipe.name}</h3>
                <img src={recipe.img} alt={recipe.name} />
            </div>
    )
}
export default Recipe;