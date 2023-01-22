import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getDevelopersLoadingStatus,
    loadDevelopersList
} from "../../../../store/slices/developers";
import Loader from "../../../common/Loader";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const developersLoading = useSelector(getDevelopersLoadingStatus());

    useEffect(() => {
        dispatch(loadDevelopersList());
    }, []);

    if (developersLoading) {
        return <Loader />;
    }

    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
