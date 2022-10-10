import { Link } from "react-router-dom"

const Header = () => {
    
    return (
        <>
        <header>
            <Link to="/" id="header_left" >recipeHome</Link>
            <div className="header_right">
            <Link to="/recipes" >Recipe</Link>
            <Link to="/account" >Account</Link>
            </div>
        </header>
        </>
    )

}

export default Header;