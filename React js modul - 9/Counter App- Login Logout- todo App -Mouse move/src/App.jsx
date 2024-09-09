import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import CounterApp from "./CounterApp";
import LoginLogout from "./LoginLogout";
import Mousemove from "./Mousemove";
import TodoApps from "./Todo";

function App() {
 

  return (
    <div >
      
      {/* <CounterApp></CounterApp> */}
      {/* <LoginLogout></LoginLogout> */}
      {/* <Mousemove></Mousemove> */}
      <TodoApps></TodoApps>
    </div>
  );
}

export default App;
