import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import RightPortion from "./components/RightPortion";
const App = () => {
  return (
    <div className="container app-div">
      <Sidebar />
      <RightPortion />
    </div>
  );
};

export default App;
