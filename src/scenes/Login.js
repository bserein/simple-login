import React from "react";

function Login({setUser}){
    return (
        <button onClick={() => setUser(true)}>Login</button>
        // this will now change so once you click it, it will automatically log you in
    )
}

export default Login;