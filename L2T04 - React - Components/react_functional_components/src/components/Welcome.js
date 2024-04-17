//Importing React
import React from "react";
//Create the Welcome Component
function Welcome(props) {
return (
<div>
{/* This h1 element uses JSX to display the name property of the props
object
*/}
        <h1>Hello World, {props.name} <br></br> {props.age}</h1>
</div>
);
}
export default Welcome;