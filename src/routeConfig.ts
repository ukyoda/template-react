import React from "react";
import Example from "./pages/Example";
import Counter from "./pages/Counter";

export interface RouteData {
  name: string;
  path: string;
  component: React.ComponentType;
  exact?: true | false;
}

const routeConfig: RouteData[] = [
  {
    name: "TOP画面",
    path: "/",
    component: Counter,
    exact: true,
  },
  {
    name: "カウンタ",
    path: "/counter",
    component: Counter,
    exact: true,
  },
  {
    name: "サンプルページ",
    path: "/example",
    component: Example,
    exact: true,
  },
];
export default routeConfig;
