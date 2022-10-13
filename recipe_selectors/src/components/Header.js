import { Link, useNavigate } from "react-router-dom"
import "./Header.css"
import logoImage from "./logoImage.png"
import logoText from "./logoText.png"


const Header = ({setSearchTerm, filterRecipe}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        setSearchTerm("")
        filterRecipe("")
        navigate("/recipes")
    }
    
    return (
        <>
        <header>
            <div className="header_left_img">
                <div className ="logoImage">
                    <Link to="/" id="header_left" >
                        <img src={logoImage} alt="Perfect Plate" />
                    </Link>
                </div>
                <div className ="logoText">
                    <Link to="/" id="header_left" >
                        <img src={logoText} alt="Perfect Plate" />
                    </Link>
                </div>
            </div>

            <div className="header_right">
            <button id="header_right_recipe" onClick={handleClick}>Recipe</button>
            <Link to="/account" id="header_account">Account</Link>
            </div>
        </header>
        </>
    )

}

export default Header;