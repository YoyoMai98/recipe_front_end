import { useState } from "react";
import CreatableSelect from "react-select/creatable";

const AddNewRecipeForm = ({ addNewRecipe, ingredients }) => {
  const statusOptions = ingredients ? ingredients.map (ingredient => {
    return {value: ingredient.name,label: ingredient.name}
  }):[];
  // const statusOptions = ingredients.map (ingredient => {
  //   console.log(ingredient);
  //   return {value: ingredient.name,label: ingredient.name}
  // });

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

  const [inputValue, setInputValue] = useState("");
  const [selectedValues, setselectedValues] = useState({ selected: [] });
  const [selection, setSelection] = useState(statusOptions);

  const handleChange = (event) => {
    const propertyName = event.target.name;
    const addedRecipe = { ...newRecipe };
    addedRecipe[propertyName] = event.target.value;
    setNewRecipe(addedRecipe);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleOnChange = () => {
    const newOption = { label: inputValue, inputValue };

    inputValue !== "" && setSelection([...selection, newOption]);

    setInputValue("");

    setselectedValues(selection);
  };

  return (
    <>
      <h3>Add New Recipe</h3>
      <form>
        <label htmlFor="name" />
        <input
          type="text"
          name="name"
          value={newRecipe.name}
          onChange={handleChange}
        />

        <label htmlFor="time" />
        <input
          type="number"
          name="time"
          value={newRecipe.time}
          onChange={handleChange}
        />

        <label htmlFor="calories" />
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

        {/* <CreatableSelect
          options={selection}
          isMulti
          onChange={handleOnChange}
          onInputChange={handleInputChange}
          inputValue={inputValue}
          value={selectedValues.selected}
          controlShouldRenderValue={true}
        /> */}

        data:
        {JSON.stringify(statusOptions)}

        
      </form>
    </>
  );
};
export default AddNewRecipeForm;