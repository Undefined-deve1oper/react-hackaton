import { Navigate } from "react-router-dom";
import DeveloperPage from "./components/pages/DeveloperPage/DeveloperPage";
import Developers from "./layouts/Developers";
import Favorites from "./layouts/Favourites";
import Home from "./layouts/Home";
import Login from "./layouts/Login";

const routes = () => {
    // const {isLogged} = useSelector(getAuth())

    const isLogged = true;

    const main = [
        { path: "", element: <Home /> },
        {
            path: "developers",
            element: <Developers />,
            children: [
                {
                    path: "",
                    element: <Navigate to="/" />
                },
                {
                    path: ":developerId",
                    element: <DeveloperPage />
                }
            ]
        },
        { path: "/favorites", element: <Favorites /> },
        { path: "*", element: <Navigate to={"/"} /> },
        {
            path: "login",
            element: <Login />,
            children: [
                {
                    path: "",
                    element: <Navigate to="/" />
                },
                {
                    path: "signup",
                    element: <Login />
                },
                {
                    path: "signin",
                    element: <Login />
                }
            ]
        }
    ];

    // const logged = [{ path: "/favorites", element: <Favorites /> }];

    return main;
};

export default routes;
