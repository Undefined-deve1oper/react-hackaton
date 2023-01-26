import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getDeveloperById } from "../../../../store/slices/developers";
import DeveloperCard from "../../../common/DeveloperCard";

const FavouriteItem = ({ devId }) => {
    const developer = useSelector(getDeveloperById(devId));

    return <DeveloperCard {...developer} />;
};

FavouriteItem.propTypes = {
    devId: PropTypes.string
};

export default FavouriteItem;
