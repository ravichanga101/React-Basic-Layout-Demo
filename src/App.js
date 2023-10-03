// App.js
import React from "react";
import MyRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MyRoutes />
      </div>
    </Router>
  );
}

export default App;
