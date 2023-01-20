import { Navigate } from "react-router-dom";
import DeveloperPage from "../components/pages/DeveloperPage/DeveloperPage";
import HomePage from "../components/pages/HomePage";
import Favorites from "../layouts/Favourites";

const routes = () => {
    // const {isLogged} = useSelector(getAuth())

    const isLogged = true;

    const main = [
        { path: "", element: <HomePage /> },
        { path: "*", element: <Navigate to={"/"} /> },
        {
            path: "developers",
            children: [
                { path: "", element: <Navigate to={"/"} /> },
                { path: ":developerId", element: <DeveloperPage /> }
            ]
        }
    ];

    const logged = [{ path: "/favorites", element: <Favorites /> }];

    return [...main, ...(isLogged ? logged : "")];
};

export default routes;
