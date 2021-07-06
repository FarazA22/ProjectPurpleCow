import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "../style/main.scss";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className="gridContainer">
      <div className="header">Project Purple Cow</div>
      <Sidebar />
      <Main />
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
