import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "../style/main.scss";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="gridContainer">
      <div className="header">Project Purple Cow</div>
      <Sidebar />
      <div className="main">
        <h1>yes!!</h1>
        <div>candy!</div>
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
