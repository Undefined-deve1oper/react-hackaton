import React from "react";
import { useRoutes } from "react-router-dom";
import withSuspense from "./components/ui/HOC/withSuspense";
import routes from "./routes";
import "./scss/app.scss";

const App = () => {
    const elements = useRoutes(routes());
    return elements;
};

const AppWithSuspense = withSuspense(App);
export default AppWithSuspense;
