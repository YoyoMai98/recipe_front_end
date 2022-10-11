import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({filterRecipe}) => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleChange = event => {
        setSearchTerm(event.target.value)
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        filterRecipe(searchTerm)
        navigate("/recipes")
    }

    return (
        <form className="search" role="search" onSubmit={handleSubmit}>
            <input
            type="search"
            placeholder="Find a Recipe"
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