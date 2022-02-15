import React from "react";

function Header({user, setUser}){
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
