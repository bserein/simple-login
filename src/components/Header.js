import React, {useContext} from "react";
import {UserContext} from '../App'

function Header(/*{user, setUser}*/){
    // you no longer need the user and set user inside header because you are bringing them from the UserContext Provider and this header file is the consumer
    const {user, setUser} = useContext(UserContext);
    return (
        <header>
            <nav>
                {user
                ? <button onClick={() => setUser(false)}>Logout</button>
                : <button onClick={() => setUser(true)}>Login</button>
                }
            </nav>
        </header>
    )
}

export default Header
