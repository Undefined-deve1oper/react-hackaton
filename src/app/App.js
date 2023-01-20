import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import "./scss/app.scss";

const App = () => {
    const element = useRoutes(routes());
    return element;
};

export default App;
