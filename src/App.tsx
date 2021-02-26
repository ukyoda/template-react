import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Example from "./pages/Example";
import Counter from "./pages/Counter";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Counter} />
          <Route exact path="/example" component={Example} />
        </div>
      </Router>
    </div>
  );
}

export default App;
