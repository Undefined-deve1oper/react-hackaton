import React from "react";
import { useRoutes } from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
import routes from "./router";
import "./scss/app.scss";

const App = () => {
    const element = useRoutes(routes());
    return (
        <>
            <NavBar />
            {element}
            {/* <Footer/> */}
        </>
    );
};

export default App;
