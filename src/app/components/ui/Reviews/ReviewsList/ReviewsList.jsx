import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GrabSlider from "../../../common/GrabSlider";
import Review from "../Review";
import {
    getComments,
    loadCommentsList
} from "../../../../store/slices/comments";
import _ from "lodash";

const ReviewsList = () => {
    const dispatch = useDispatch();
    const { developerId } = useParams();
    const reviews = useSelector(getComments());

    useEffect(() => {
        dispatch(loadCommentsList(developerId));
    }, []);

    if (reviews) {
        const sortedReviews = _.orderBy(reviews, ["created_at"], ["desc"]);

        return (
            <ul className={"reviews-list"}>
                {sortedReviews.length > 0 ? (
                    <GrabSlider>
                        {sortedReviews.map((review) => (
                            <Review key={review.id} review={review} />
                        ))}
                    </GrabSlider>
                ) : (
                    <p>Список отзывов пуст</p>
                )}
            </ul>
        );
    }
};

export default ReviewsList;
