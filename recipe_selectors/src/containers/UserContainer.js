import LogIn from "../components/LogIn"
import User from "../components/User"
import { useEffect, useState } from "react"


const UserContainer = ({loggedInUser}) => {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:8080/users");
        const userData = await response.json();
        setUsers(userData);
    }

    useEffect(() => {
        fetchUsers()
    },[])

    return(
        <>
        <LogIn loggedInUser={loggedInUser} users={users}/>
        <User user={users[0]}/>
        </>
    )
}

export default UserContainer;