import React, {useContext} from "react";
import {UserContext} from '../App'

function Login(/*{setUser}*/){
    //so you no longer need the set user in the file 
    const {setUser} = useContext(UserContext);
    return (
        <button onClick={() => setUser(true)}>Login</button>
        // this will now change so once you click it, it will automatically log you in
    )
}

export default Login;