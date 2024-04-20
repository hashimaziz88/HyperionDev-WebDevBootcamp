import React from "react";
export default function NameInput(props) {
  // The props passed to this component include the state variable 'name',
  // and the handleChange function that changes the state of name is passed as a prop
  return (
    <div>
      {/* Input component using onChange to update the value of the state */}
      <label>
        Enter Name :
        <input
          // The onChange event calls the handleChange function
          that
          was
          passed
          from
          the
          parent
          component
          as
          a
          prop
          onChange={(event) => props.handleChange(event.target.value)}
          name="nameInput"
          defaultValue=" Enter name here"
          value={props.name}
        />
      </label>
      {/* Display the value of the name State variable */}
      <h3>Name :{props.name}</h3>
    </div>
  );
}
