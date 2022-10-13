import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LogIn.css"

const LogIn = ({users,loggedInUser, postUser}) => {
    const navigate = useNavigate()

    const [chosenUser, setChosenUser] = useState({
        name:"",
        favRecipes:[],
    })
    const [clicked, setClicked] = useState(false)
    const [newUser, setNewUser] = useState({
        name: "",
        favRecipes: []
    })

    const handleChange = event => {
        const userId = parseInt(event.target.value);
        const selectedUser = users.find(user=> user.userId ===userId);
        setChosenUser(selectedUser)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        loggedInUser(chosenUser)

       setChosenUser({
        name:"",
        favRecipes:[]
       })

        navigate("/account")
    }

    const handleRegisterChange = event => {
        const propertyName = event.target.name
        const savedUser = {...newUser}
        savedUser[propertyName] = event.target.value
        setNewUser(savedUser)
    }

    const handleRegisterSubmit = event => {
        event.preventDefault();
        postUser(newUser)
        loggedInUser(newUser)
        setNewUser({
            name:"",
            favRecipes:[]
        })
        navigate("/account")
    }

    const UserOptions = users? users.map((user)=>{
        return <option key={user.userId} value={user.userId}>{user.name}</option>
    }) : []

    const handleRegisterClick = () => {
        setClicked(true)
    }

    const handleLogInClick = () => {
        setClicked(false)
    }

    return (
        <div className="form-bg">
            <div className="form-container">
                {!clicked ?
                <>
                <h3>Log into your account</h3>
                <form onSubmit={handleFormSubmit} className="user-log-in-form">
                    <select 
                        name="user"
                        onChange={handleChange}
                        id="log-in-select"
                        defaultValue="select-user">
                        <option disabled-value="select-user"> Select a user</option>
                        {UserOptions}
                    </select>
                    <button type="submit" id="log-in-btn">Log In</button>
                </form>
                </> :
                <>
                <h3>Perfect Plate</h3>
                <form onSubmit={handleRegisterSubmit} className="user-log-in-form">
                    <label htmlFor="name">Username</label>
                    <input 
                        name="name"
                        onChange={handleRegisterChange}
                        id="log-in-select"
                        type="name" />
                    <button type="submit" id="log-in-btn">Register</button>
                </form>
                </>
                }
                {!clicked?
                    <button onClick={handleRegisterClick} id="log-in-register-btn">Register</button> :
                    <button onClick={handleLogInClick} id="log-in-register-btn">Log In</button>
                }
            </div>
        </div>
    )
}
export default LogIn;