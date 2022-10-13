import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Header.css"
import logo from "./logo.png"

const Header = () => {

    // const[clicked, setClicked] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/recipes")
        window.location.reload()
    }
    
    return (
        <>
        <header>
            <Link to="/" id="header_left" >
                <img src={logo} alt="Perfect Plate" />
            </Link>
            <div className="header_right">
            <button id="header_right_recipe" onClick={handleClick}>Recipe</button>
            <Link to="/account" id="header_account">Account</Link>
            </div>
        </header>
        </>
    )

}

export default Header;