import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    
    return (
        <>
        <header>
            <Link to="/" id="header_left" >recipeHome</Link>
            <div className="header_right">
            <Link to="/recipes" id="header_right_recipe" >Recipe</Link>
            <Link to="/account" id="header_account">Account</Link>
            </div>
        </header>
        </>
    )

}

export default Header;