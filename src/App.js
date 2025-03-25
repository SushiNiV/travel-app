import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/header/header";
import Banner1 from "./components/banner/banner1";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Banner1/>
      </div>
    </Router>
  );
}

export default App;
