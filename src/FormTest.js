import {/* useState,*/ useContext } from "react";
//dont need the usestate anymore since you are using the context
import { UserContext } from "./App";



function FormTest() {
// const [firstName, setFirstName] = useState(''); // 1. set up state
//you take the useState from here and you put it in the App
const {firstName, setFirstName} = useContext(UserContext);

const handleFirstName = (event) => {
  setFirstName(event.target.value)
}
const handleSubmit = (event) => {
  event.preventDefault()
  alert(`Form submitted. Thanks ${firstName}`)
}

  return (
    <>
   <h1>Hello {firstName}</h1>
    <form onSubmit={handleSubmit}>
    <label> First Name: &nbsp;
      <input 
      type='text' 
      value={firstName} // 2. set input value to state
      onChange={handleFirstName} // 3. onChange, update state
      />
    </label>
    </form>
    </>
  );
}

export default FormTest;
