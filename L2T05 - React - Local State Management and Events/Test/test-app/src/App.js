// Importing components and CSS files
import Welcome from "../src/components/Welcome.js";
import "./App.css";
import NameInput from "../src/components/NameInput.js";
import Count from "./components/Count.js";
import DisplayName from "./components/DisplayName.js";

// Create the App component
function App() {
  return (
    <div className="App">
      <DisplayName />
    </div>
  );
}
export default App;
