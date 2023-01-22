import React from "react";
import { useRoutes } from "react-router-dom";
import withSuspense from "./components/ui/HOC/withSuspense";
import withRedux from "./components/ui/HOC/withRedux";
import withRouter from "./components/ui/HOC/withRouter";
import routes from "./routes";
import "./scss/app.scss";
import AppLoader from "./components/ui/HOC/AppLoader/AppLoader";

const App = () => {
    const elements = useRoutes(routes());
    return <AppLoader>{elements}</AppLoader>;
};

const AppWithSuspense = withSuspense(App);
const AppWithStoreAndRoutes = withRedux(withRouter(AppWithSuspense));
export default AppWithStoreAndRoutes;
