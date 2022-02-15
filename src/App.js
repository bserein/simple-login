import { useState, createContext } from "react";
import FormTest from "./FormTest";
import Header from "./components/Header";
import Login from "./scenes/Login";

export const UserContext = createContext(null);
// we could call this whatever we want

function App() {
  const [user, setUser] = useState();
  const [firstName, setFirstName] = useState('');
return (
    <UserContext.Provider value={{user, setUser, firstName, setFirstName}}>
     <Header />
     {/*user={user} setUser={setUser} <-- this would be in the header if not using the context*/}
   <FormTest />
   <br />
   {!user && <Login />}
   {/* setUser={setUser} <-- this would be in the header if not using the context */}
   {/* you put the function into the component/ this also will not show the login button when theres a user */}
    </UserContext.Provider>
  );
}
//more changes
export default App;

//buttons are onClick, inputs are onChange and forms are onSubmits