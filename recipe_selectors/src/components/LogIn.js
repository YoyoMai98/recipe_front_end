import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogIn = ({users,loggedInUser}) => {

    const navigate = useNavigate()

    const [chosenUser, setChosenUser] = useState({
        name:"",
        favRecipes:[],
    })

    const handleChange = event => {
        const userId = parseInt(event.target.value);
        const selectedUser = users.find(user=> user.id ===userId);
        setChosenUser(selectedUser)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        loggedInUser(chosenUser)
        navigate("/account")
    }

    const UserOptions = users.map((user)=>{
        return <option key={user.id} value={user.id}>{user.name}</option>
    
    })
    // selected option => loggedInUser => state store in App.js
    // onChange => store selecedUser
    // method in App to setLoggedInUser(selecedUser) => props in LogIn component
    // called when we click the submit button (log in)
    // setLoggedInUser() => press log out

    // one button: log in
    // one button: log out
    return (
        <div className="user-log-in-form">
        <form onSubmit={handleFormSubmit}>
            <select 
                name="user"
                onChange={handleChange}
                defaultValue="select-user">
                <option disabled-value="select-user"> Select a user</option>
                {UserOptions}
            </select>
            <button type="submit" id="log-in">LogIn</button>
        </form>
        <buttom id="log-out">LogOut</buttom>
        
        </div>
    )
}
export default LogIn;