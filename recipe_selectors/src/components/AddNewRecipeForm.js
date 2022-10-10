import {useState} from "react";
import RecipeList from "./RecipeList";
import IngredientsList from "./IngredientsList";

const AddNewRecipeForm = ({addNewRecipe, ingredients}) => {

    const [newRecipe, setNewRecipe] = useState({
        name:"",
        averageRating:0,
        time:0,
        calories:0,
        servings:0,
        ingredients:[]
    });

    const [newIngredient, setNewIngredient] = useState({
        name:"",
        isGlutenFree:false,
        isVegan:false,
        isVegetarian:false,
        allergensContained:"NONE",
    })

    const handleChange = event => {
        const propertyName = event.target.name
        const addedRecipe = {...newRecipe}
        addedRecipe[propertyName] = event.target.value
        setNewRecipe(addedRecipe);
    }

    return (
        <>
        <h3>Add New Recipe</h3>
        <form>
            <label htmlFor="name"/>
            <input 
            type="text"
            name="name"
            value={newRecipe.name}
            onChange={handleChange}
            />

            <label htmlFor="time"/>
            <input 
            type="number"
            name="time"
            value={newRecipe.time}
            onChange={handleChange}
            />

            <label htmlFor="calories"/>
            <input 
            type="number"
            name="calories"
            value={newRecipe.calories}
            onChange={handleChange}
            />

            <label htmlFor="servings" />
            <input 
            type="number"
            name="servings"
            value={newRecipe.servings}
            onChange={handleChange}
            />

            <IngredientsList/>

        </form>
        
        </>
    )

}

