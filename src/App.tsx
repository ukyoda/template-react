import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Example from "./pages/Example";
import Counter from "./pages/Counter";
import Layout from "./layouts/default";
import routeConfig, { RouteData } from "./routeConfig";

function App() {
  const routes = routeConfig.map((item: RouteData, idx) => {
    const { path, component, exact } = item;
    const key = `route-${idx}`;
    return <Route key={key} exact={exact} path={path} component={component} />;
  });
  return (
    <div>
      <Router>
        <Layout>{routes}</Layout>
      </Router>
    </div>
  );
}

export default App;
