import Ingredient from "./Ingredient"
import "./IngredientList.css"


const IngredientsList = ({ingredients}) => {

    const ingredientsComponents = ingredients.map(ingredient =>{
        
        return < Ingredient
        key={ingredient.id}
        ingredient={ingredient} />
    })

    return (
        <>
        <div className="ingredient_list_component">
            {ingredientsComponents}
        </div>
        {/* ingredient :{ingredients} */}
        </>
    ) 
}
export default IngredientsList