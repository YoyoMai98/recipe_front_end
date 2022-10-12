import LogIn from "../components/LogIn"
import User from "../components/User"


const UserContainer = ({loggedInUser, onlineUser, users, postUser}) => {

    return(
        <>
        { onlineUser === undefined ?
        <LogIn loggedInUser={loggedInUser} users={users} postUser={postUser}/> :
        <User user={onlineUser} loggedInUser={loggedInUser}/>
        }
        </>
    )
}

export default UserContainer;