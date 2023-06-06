import {} from "antd";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import About from "./Components/About";
import Accordian from "./Components/Accordian";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <About/>
        <Accordian/>
      </BrowserRouter>
    </div>
  );
}
export default App;
