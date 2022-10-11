import Header from "../components/Header"
import User from "../components/User"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"

const UserContainer = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await fetch("http:localhost:8080/users");
        const userData = await response.json();
        console.log("userData");
        console.log(userData);
        setUsers(userData);
    }

    useEffect(() => {
        fetchUsers()
        console.log("fetchUsers");
        console.log(users);

    },[users])

    return(
        <>
        <Header/>
        <User user={users[0]}/>
        <Footer/>
        </>
    )
}

export default UserContainer;