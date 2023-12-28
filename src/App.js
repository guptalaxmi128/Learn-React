import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Child from "./components/Child";
import Login from "./components/Login";
// import Greet from "./components/greet/Greet";
import Welcome from "./components/welcome/Welcome";
// import Example from "./components/Example";
import QRCode from "./components/QRCode";

function App() {
  const getData = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Welcome /> */}
      {/* <Example name="Laxmi" role="Developer" >
        <p>This is my component</p>
      </Example>
      <Example name="Ankush" role="Backend Developer" />
      <Example name="Ram" role ="Fullstack"/> */}
      {/* <Child  getData={getData} /> */}
      {/* <Child />  */}
      {/* <Login /> */}
      <Router>
        <Routes>
          <Route path="/" element={<QRCode />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
