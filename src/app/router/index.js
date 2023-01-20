import {Navigate} from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import Favorites from "../components/pages/Favorites";
import User from "../components/pages/User";

const routes = () => {
    // const {isLogged} = useSelector(getAuth())

    const isLogged = true

    const main = [
        {path: '', element: <HomePage/>},
        {path: '*', element: <Navigate to={''}/>},
        {
            path: 'user', children: [
                {path: '', element: <Navigate to={''}/>},
                {path: ':userId', element: <User/>},
            ]
        }
    ]

    const logged = [
        {path: '/favorites', element: <Favorites/>},
    ]

    return [
        ...main,
        ...isLogged ? logged : '',
    ]
}

export default routes