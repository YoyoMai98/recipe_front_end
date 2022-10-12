import Header from "./Header";
import "./User.css"

const User = ({user, loggedInUser}) => {

    const logOut = () => {
        loggedInUser({
            name:"",
            favRecipes: []
        })
        window.location.reload()
    }

    
    return (
        <div className="user">
            <h2>{user ? user.name : ""}</h2>
            <h3>Favourite Recipes</h3>
            <ul>
            {user ? user.favRecipes.map(favRecipe => {
                
                return <li>{favRecipe.name}</li>
            }):<li></li>}
            </ul>
            <button onClick={logOut} id="log-out">Log Out</button>
        </div>
    )
}
export default User;

