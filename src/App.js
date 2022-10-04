import React from "react";
import CrudApp from "./components/CrudApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import CrudApi from "./components/CrudApi";


function App() {
  return (
    <div className="App ">
    <h2>Ejercicios con React</h2>
    <CrudApi/>
    <hr/>
    <br/>
    <CrudApp/>
    </div>
  );
}

export default App;
