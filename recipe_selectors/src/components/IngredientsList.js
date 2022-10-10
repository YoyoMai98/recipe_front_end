import Ingredient from "./Ingredient"

const IngredientsList = ({ingredients}) => {

    const ingredientsComponents = ingredients.map(ingredient =>{
        
        return < Ingredient
        key={ingredient.id}
        ingredient={ingredient} />
    })

    return (
        <>
        {ingredientsComponents}
        </>
    ) 
}
export default IngredientsList