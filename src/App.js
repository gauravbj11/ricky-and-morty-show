import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Homepage from "../src/features/homepage";
import "typeface-roboto";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Homepage />
      </div>
    </>
  );
}

export default App;
