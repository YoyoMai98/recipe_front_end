import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LogIn.css"

const LogIn = ({users,loggedInUser}) => {
    const navigate = useNavigate()

    const [chosenUser, setChosenUser] = useState({
        name:"",
        favRecipes:[],
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

    const UserOptions = users? users.map((user)=>{
        return <option key={user.userId} value={user.userId}>{user.name}</option>
    }) : []

    return (
        <div className="form-bg">
            <div className="form-container">
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
            </div>
        </div>
    )
}
export default LogIn;