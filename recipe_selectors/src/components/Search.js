import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css"

const Search = ({filterRecipe, className}) => {
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

    const handleClick = () => {
        setSearchTerm("")
        filterRecipe("")
    }

    return (
        <div className="search-container">
            <form className={`search ${className}`} role="search" onSubmit={handleSubmit}>
                <input
                type="search"
                placeholder="Find a Recipe"
                id="search_input"
                value={searchTerm}
                onChange={handleChange}
                />
                <span className={searchTerm? "clear-btn" : "hidden"}>
                    <img onClick={handleClick} src="https://www.nationalgallery.org.uk/v2/img/icons/close-thin.svg" alt="clear" />
                </span>
                <input 
                type="submit"
                id="search_button"
                value="Search"
                />
            </form>
        </div>

    )

}

export default Search;