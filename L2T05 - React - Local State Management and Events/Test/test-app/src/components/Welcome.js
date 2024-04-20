import React from "react";
function Welcome(props) {
  // An event handler function that displays a console.log message
  const displayAge = () => {
    console.log(props.age);
  };
  // An event handler function that changes the background color of the web page
  function changeBackgroundColor() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }
  return (
    <div>
      <h1>Hello World, {props.name}</h1>
      {/* This button will call the displayAge function when clicked */}
      <button onClick={displayAge}>Display The User's Age</button>
      {/*
This
button
will
call
the
changeBackgroundColor
function when
clicked */}
      <button onClick={changeBackgroundColor}>Change Background Color</button>
    </div>
  );
}
export default Welcome;
