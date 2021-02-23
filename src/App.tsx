import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Example from "./pages/Example";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Example} />
        </div>
      </Router>
    </div>
  );
}

export default App;
