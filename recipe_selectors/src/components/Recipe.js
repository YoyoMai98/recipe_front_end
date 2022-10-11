import "./Recipe.css"
import { Link } from "react-router-dom";

const Recipe = ({recipe}) => {
    return(
            <div className="recipe">
                <Link to={`/recipes/${recipe.id}`}>
                    <h3>{recipe.name}</h3>
                </Link>
                <img src={recipe.img} alt={recipe.name} />
            </div>
    )
}
export default Recipe;