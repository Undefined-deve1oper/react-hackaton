import React from "react";
import PropTypes from "prop-types";
import FavouriteItem from "../FavouriteItem";

const FavouritesList = ({ favourites }) => {
    return (
        <ul style={{ marginTop: "60px" }}>
            {favourites.map((fav) => (
                <li key={fav.id}>
                    <FavouriteItem devId={fav.personId} />
                </li>
            ))}
        </ul>
    );
};

FavouritesList.propTypes = {
    favourites: PropTypes.array
};

export default FavouritesList;
