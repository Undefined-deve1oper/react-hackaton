import React from "react";
import { useRoutes } from "react-router-dom";
import withSuspense from "./components/ui/HOC/withSuspense";
import withRedux from "./components/ui/HOC/withRedux";
import withRouter from "./components/ui/HOC/withRouter";
import routes from "./routes";
import "./scss/app.scss";

const App = () => {
    const elements = useRoutes(routes());
    return elements;
};

const AppWithSuspense = withSuspense(App);
const AppWithStoreAndRoutes = withRedux(withRouter(AppWithSuspense));
export default AppWithStoreAndRoutes;
