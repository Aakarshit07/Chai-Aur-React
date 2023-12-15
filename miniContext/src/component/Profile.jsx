import React, { useContext } from "react";
import UserContext from "../context/UserContext";
// Getting Data Using UserContext. 

function Profile () {
    const {user} = useContext(UserContext);
    
    return (
        <div>
            <h1>{user ? `Welcome ${user.username}` : "No Profile Found"}</h1>
        </div>
    )
}
export default Profile;