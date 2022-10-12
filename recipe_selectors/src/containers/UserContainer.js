import LogIn from "../components/LogIn"
import User from "../components/User"


const UserContainer = ({loggedInUser, onlineUser, users}) => {

    return(
        <>
        { onlineUser === undefined ?
        <LogIn loggedInUser={loggedInUser} users={users}/> :
        <User user={onlineUser} loggedInUser={loggedInUser}/>
        }
        </>
    )
}

export default UserContainer;