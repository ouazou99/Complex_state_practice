import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setContact((prev) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prev.lName,
          email: prev.email
        };
      } else if (inputName === "lName") {
        return {
          fName: prev.fName,
          lName: newValue,
          email: prev.email
        };
      } else if (inputName === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handleChange} placeholder="First Name" />
        <input name="lName" onChange={handleChange} placeholder="Last Name" />
        <input name="email" onChange={handleChange} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
