import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import "./AddNewRecipeForm.css"

const AddNewRecipeForm = ({ addNewRecipe, ingredients }) => {

  const statusOptions = ingredients ? ingredients.map (ingredient => {
    return {value: ingredient.name,label: ingredient.name}
  }):[]


  const [newRecipe, setNewRecipe] = useState({
    name: "",
    averageRating: 0,
    time: 0,
    calories: 0,
    servings: 0,
    ingredients: [],
  });

  const [newIngredient, setNewIngredient] = useState({
    name: "",
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    allergensContained: "NONE",
  });

  const [selectedValues, setselectedValues] = useState({ selected: [] });
  const [selection, setSelection] = useState([]);
  // const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {
    if(selection.length < 1) {
      setSelection(() => statusOptions)
    }
  }, [statusOptions])

  const handleChange = (event) => {
    const propertyName = event.target.name;
    const addedRecipe = { ...newRecipe };
    addedRecipe[propertyName] = propertyName === "name" ? event.target.value : parseInt(event.target.value);
    setNewRecipe(addedRecipe);
  };

  const handleOnChange = (values) => {
    setselectedValues(values);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault()
    storeIngredients()
    addNewRecipe(newRecipe)
  }

  const storeIngredients = () => {
    const selectedIngredientsValue = selectedValues.map(selectedValue => selectedValue.value)
    let selectedIngredients = []
    for(let selectedIngredientValue of selectedIngredientsValue){
      const selectedIngredient = ingredients.find(ingredient => ingredient.name.includes(selectedIngredientValue))
      selectedIngredients.push(selectedIngredient)
    }
    newRecipe.ingredients = selectedIngredients
    setNewRecipe(newRecipe)
  }

  return (
    <div className="add-new-recipe-form">
      <h3>Add New Recipe</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={newRecipe.name}
          onChange={handleChange}
        />

        <label htmlFor="time">Time</label>
        <input
          type="number"
          name="time"
          min="1"
          value={newRecipe.time}
          onChange={handleChange}
        />

        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          min="1"
          value={newRecipe.calories}
          onChange={handleChange}
        />

        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          name="servings"
          min="1"
          value={newRecipe.servings}
          onChange={handleChange}
        />
        <label htmlFor="ingredients">Choose ingredients</label>
        <CreatableSelect
          options={selection}
          isMulti
          onChange={handleOnChange}
          value={selectedValues.selected}
          controlShouldRenderValue={true}
          id="select"
        />

        <button type="submit" id="submit-btn">Add new recipe</button>
      </form>
    </div>
  );
};
export default AddNewRecipeForm;