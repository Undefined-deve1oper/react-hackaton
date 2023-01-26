import React from "react";
import PropTypes from "prop-types";
import FavouriteItem from "../FavouriteItem";

const FavouritesList = ({ favourites }) => {
    return (
        <div className={`team-list list`} style={{ margin: "30px 0px" }}>
            {favourites.map((fav) => (
                <div key={fav.id} className="team-list_item">
                    <FavouriteItem devId={fav.personId} />
                </div>
            ))}
        </div>
    );
};

FavouritesList.propTypes = {
    favourites: PropTypes.array
};

export default FavouritesList;
