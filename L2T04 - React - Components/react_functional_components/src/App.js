import "./App.css";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
// Importing the components
import LayoutExample from "./components/LayoutExample.js";
import StackExample from "./components/StackExample";

function App() {
  return (
    <div className="App">
      <hr />
      <Welcome name="Joe Soap" age="23" />
      <Welcome name="John Smith" age="39" />
      <hr />
      {/* Adding standard CSS styling to an HTML component in React */}
      <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
      {/* A Standard HTML Button Component */}
      <button> a Regular HTML Button</button>
      <hr />
      {/* A Bootstrap Button Component */}
      <Button>a Standard Bootstrap Button</Button>
      <hr />
      {/* These are variants of the same Bootstrap button */}
      <Button variant="outline-secondary">a Bootstrap Outline Button</Button>
      <hr />
      <Button variant="success">a Bootstrap Success Button</Button>
      <hr />
      <Button variant="link">Link</Button>
      <hr />
      {/* display the LayoutExample component */}
      <LayoutExample />
      <hr />
      {/* display the StackExample component */}
      <StackExample />
    </div>
  );
}

export default App;
