import { useState } from "react";

const Search = ({filterRecipe}) => {
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleChange = event => {
        setSearchTerm(event.target.value)
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        filterRecipe(searchTerm)
    }

    return (
        <form className="search" role="search" onSubmit={handleSubmit}>
            <input
            type="search"
            placeholder="Search Recipes"
            id="search_input"
            value={searchTerm}
            onChange={handleChange}
            />

            <input 
            type="submit"
            id="search_button"
            value="Search"
            />
            
        </form>

    )

}

export default Search;