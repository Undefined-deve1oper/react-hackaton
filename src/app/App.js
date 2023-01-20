import React from "react";
import Home from "./layouts/Home";
import "./scss/app.scss";
import {useRoutes} from "react-router-dom";
import NavBar from "./components/ui/NavBar";
import routes from "./router";


const App = () => {
<<<<<<< HEAD
    return <Home />;
=======
    const element = useRoutes(routes())
    return (
        <>
            <NavBar/>
            <main>
                {element}
            </main>
        </>
    )
>>>>>>> 35fd01c8dab2bc56558d2dccc0a28f53823e4a49
};

export default App;
