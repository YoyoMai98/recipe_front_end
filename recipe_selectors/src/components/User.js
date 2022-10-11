import Header from "./Header";

const User = ({user}) => {
    
    return (
        <>
        <h2>{user ? user.name : ""}</h2>
            <h3>Favourite Recipes</h3>
            <ul>
            {user ? user.favRecipes.map(favRecipe => {
                
                return <li>{favRecipe.name}</li>
            }):<li></li>}


            </ul>
        
        
        
        </>
    )
}
export default User;

