import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
// Sending Data Using UserContext. 
function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password});
    }

    return (
        <div>
            <div>
                <h3>Login</h3>
                <input type="text" 
                    value={username} 
                    onChange={(e)=> setUsername(e.target.value)}
                />
            </div>
            <div>
                <h3>Password</h3>
                <input type="text" 
                    value={password} 
                    onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
            <br />    
            <button onClick={handleSubmit}>Submit</button>
            
        </div>
    )
}

export default Login;