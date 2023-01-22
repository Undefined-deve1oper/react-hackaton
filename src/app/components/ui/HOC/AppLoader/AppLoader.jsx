import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, loadUsersList } from "../../../../store/slices/auth";
import {
    getDevelopersLoadingStatus,
    loadDevelopersList
} from "../../../../store/slices/developers";
import {
    getQualitiesLoadingStatus,
    loadQualitiesList
} from "../../../../store/slices/qualities";
import Loader from "../../../common/Loader";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const developersLoading = useSelector(getDevelopersLoadingStatus());
    const qualitiesLoading = useSelector(getQualitiesLoadingStatus());
    const usersLoading = useSelector(getIsLoading());

    useEffect(() => {
        dispatch(loadDevelopersList());
        dispatch(loadQualitiesList());
        dispatch(loadUsersList());
    }, []);

    if (usersLoading && developersLoading && qualitiesLoading) {
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
