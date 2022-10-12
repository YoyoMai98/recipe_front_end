import "./Footer.css"
import {useNavigate} from 'react-router-dom'
import { useState } from "react"

const Footer = ({loggedInUser, postUser}) =>{

    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        favRecipes: []
    })

    const handleChange = event => {
        const propertyName = event.target.name
        const savedUser = {...user}
        savedUser[propertyName] = event.target.value
        setUser(savedUser)
    }

    const handleSubmit = event => {
        event.preventDefault();
        postUser(user)
        loggedInUser(user)
        setUser({
            name:"",
            favRecipes:[]
        })
        navigate("/account")
    }

    return (
        <>

        <footer>
            <div className="footer_registration">
                <form className="registration_form" onSubmit={handleSubmit}>
                    <div className="name_form">
                        <label htmlFor="userName">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            onChange={handleChange}
                        />
                    </div>
                <input
                    type="submit"
                    id="registrationButton"
                    value="Register"
                />
                </form>
            </div>
        </footer>
        </>
    )
}

export default Footer;