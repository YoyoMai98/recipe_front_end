import { Link } from "react-router-dom";

const AppContainer = ({recipes}) => {

    const recipeHero = recipes.filter(recipe => recipe.averageRating > 4);

    return (
        <>
            {recipeHero.map ((recipe, index) => {
                return(
                    <div className="recipe-hero" key={index}>
                        <Link to={`/recipes/${recipe.id}`}>
                            <h4>{recipe.name}</h4>
                        </Link>
                        <img src={recipe.img} alt={recipe.name} />
                    </div>
                )
            })
            }
        </>
    )
}

export default AppContainer