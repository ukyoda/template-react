import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Example from "./pages/Example";
import Counter from "./pages/Counter";
import Layout from "./layouts/default";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <div>
            <Route exact path="/" component={Counter} />
            <Route exact path="/example" component={Example} />
          </div>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
