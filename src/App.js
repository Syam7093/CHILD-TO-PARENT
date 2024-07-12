import "./App.css";
import Calculator from "./components/Calculator";
import Child from "./components/Child";
import Data from "./components/Data";
import Parent from "./components/Parent";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Singleprop from "./components/Singleprop";
import DoubleProp from "./components/DoubleProp";
import Syam from "./components/Syam";
import Sai from "./components/Sai";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Singleprop></Singleprop>}></Route>
      <Route path="/sai" element={<DoubleProp></DoubleProp>}>
      <Route path="lll" element={<Syam></Syam>}></Route>
      <Route path="jj" element={<Sai></Sai>}></Route>
      </Route>
        <Route path="/ss" element={<Calculator></Calculator>}></Route>
        <Route path="/one" element={<Data></Data>}></Route>
        <Route path="/parent" element={<Parent></Parent>}></Route>
        <Route path="/child" element={<Child></Child>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
