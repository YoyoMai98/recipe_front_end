import { Link } from "react-router-dom"
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
            <div className="user-name">
                <h2>{user ? user.name : ""}</h2>
            </div>
            <h3>Favourite Recipes</h3>
            <ul>
            {user && user.favRecipes.length > 0 ? user.favRecipes.map(favRecipe => {
                return <>
                    <Link to={`/recipes/${favRecipe.id}`}>
                    <li key={favRecipe.id}>{favRecipe.name}</li>
                    </Link>
                    </>
            }):<li></li>}
            </ul>
            <button onClick={logOut} id="log-out">Log Out</button>
        </div>
    )
}
export default User;

