import FormTest from "./FormTest";
import Header from "./components/Header";
import { useState } from "react";
import Login from "./scenes/Login";

function App() {
  const [user, setUser] = useState();
return (
    <>
    <Header user={user} setUser={setUser}/>
   <FormTest />
   <br />
   {!user && <Login setUser={setUser}/>}
   {/* you put the function into the component/ this also will not show the login button when theres a user */}
    </>
  );
}

export default App;

//buttons are onClick, inputs are onChange and forms are onSubmits