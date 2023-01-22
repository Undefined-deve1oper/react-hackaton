import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getUserById } from "../../../../store/slices/auth";
import { displayDate } from "../../../../utils/dateService";
import { deleteComment } from "../../../../store/slices/comments";
import Avatar from "../../../common/Avatar/Avatar";
import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";

const Review = ({ review }) => {
    const [fullText, setFullText] = useState(false);
    const currentUser = useSelector(getCurrentUser());
    const authorComment = useSelector(getUserById(review.userId));
    const dispatch = useDispatch();

    const getReviewText = (text) => {
        if (fullText) {
            return text;
        }
        return text.slice(0, 40);
    };
    const handleDelete = () => {
        dispatch(deleteComment(review.id));
    };
    const handleToggleFullText = () => {
        setFullText((prevState) => !prevState);
    };

    return (
        <li className={"review"}>
            <div className={"review__user"}>
                <Avatar src={authorComment.image} size={30} />
                <h3 className={"review__author"}>{authorComment.name}</h3>
                <span className={"review__date"}>
                    {displayDate(review.created_at)}
                </span>
                {currentUser && currentUser.id === authorComment.id && (
                    <Button styleType={"none"} onClick={handleDelete}>
                        <SvgIcon name="delete-icon" svgClass="review__delete" />
                    </Button>
                )}
            </div>

            <p className={"review__description"}>
                {getReviewText(review.text)}{" "}
                {!fullText && review.text.length > 40 && (
                    <span
                        className={"review__full_description"}
                        onClick={handleToggleFullText}
                    >
                        открыть полностью
                    </span>
                )}
            </p>
        </li>
    );
};

Review.propTypes = {
    review: PropTypes.object
};

export default Review;
