import { useState } from "react";


function FormTest() {
const [firstName, setFirstName] = useState(''); // 1. set up state

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
