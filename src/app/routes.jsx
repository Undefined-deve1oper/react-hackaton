import React from "react";
import { Navigate } from "react-router-dom";

const Login = React.lazy(() => import("./layouts/Login"));
const Home = React.lazy(() => import("./layouts/Home"));
const Favorites = React.lazy(() => import("./layouts/Favourites"));
const Developers = React.lazy(() => import("./layouts/Developers"));
const DeveloperPage = React.lazy(() =>
    import("./components/pages/DeveloperPage")
);

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
