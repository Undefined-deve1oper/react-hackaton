import React from "react";
import { Navigate } from "react-router-dom";
import TeamList from "./components/common/TeamList";

const Home = React.lazy(() => import("./layouts/Home"));
const Favorites = React.lazy(() => import("./layouts/Favourites"));
const Developers = React.lazy(() => import("./layouts/Developers"));
const DeveloperPage = React.lazy(() =>
    import("./components/pages/DeveloperPage")
);
const Login = React.lazy(() => import("./layouts/Login"));
const SignUpPage = React.lazy(() =>
    import("./components/pages/LoginPages/SignUpPage")
);
const SignInPage = React.lazy(() =>
    import("./components/pages/LoginPages/SignInPage")
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
                    path: "/",
                    element: <TeamList />
                },
                {
                    path: ":developerId",
                    element: <DeveloperPage />
                },
                {
                    path: "*",
                    element: <Navigate to="/" />
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
                    path: "signup",
                    element: <SignUpPage />
                },
                {
                    path: "signin",
                    element: <SignInPage />
                },
                {
                    path: "",
                    element: <Navigate to="/login/signup" />
                }
            ]
        }
    ];

    // const logged = [{ path: "/favorites", element: <Favorites /> }];

    return main;
};

export default routes;
