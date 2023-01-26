import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getRandomId } from "../../../utils/helpFunctions";
import SvgIcon from "../SvgIcon";
import { getAuthUserId } from "../../../store/slices/auth";
import {
    createFavourite,
    getCurrentUserFavourite,
    removeFavourite
} from "../../../store/slices/favourites";

const FavouriteButton = ({ id }) => {
    const userId = useSelector(getAuthUserId());
    const dispatch = useDispatch();
    const currentFavouriteId = useSelector(getCurrentUserFavourite(id))?.id;
    const currentFavouriteBool = !!currentFavouriteId;
    const [isFavourite, setIsFavourite] = useState(currentFavouriteBool);

    return (
        <div
            disabled={!userId}
            onClick={() => {
                if (isFavourite) {
                    dispatch(removeFavourite(currentFavouriteId));
                } else {
                    dispatch(
                        createFavourite({
                            personId: id,
                            id: getRandomId(),
                            userId
                        })
                    );
                }
                setIsFavourite((prev) => !prev);
            }}
        >
            <SvgIcon
                name="heart"
                svgClass={isFavourite ? "favourite-active" : ""}
            />
        </div>
    );
};
FavouriteButton.propTypes = {
    id: PropTypes.string
};
export default FavouriteButton;
