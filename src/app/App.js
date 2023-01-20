import React from "react";
import "./scss/app.scss";
import {useRoutes} from "react-router-dom";
import NavBar from "./components/ui/NavBar";
import routes from "./router";


const App = () => {
    const element = useRoutes(routes())
    return (
        <>
            <NavBar/>
            <main>
                {element}
            </main>
        </>
    )
};

export default App;
