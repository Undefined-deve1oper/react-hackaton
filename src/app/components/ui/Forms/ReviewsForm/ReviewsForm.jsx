import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../../../store/slices/auth";
import { useParams } from "react-router-dom";
import { rewiewsValidatorConfig } from "../../../../utils/validatorConfig";
import { nanoid } from "@reduxjs/toolkit";
import FormComponent, { TextField } from "../../../common/Fields";
import useForm from "../../../../hooks/useForm";
import Button from "../../../common/Button";
import { createComment } from "../../../../store/slices/comments";

const initialState = { review: "" };

const ReviewsForm = () => {
    const dispatch = useDispatch();
    const { developerId } = useParams();
    const currentUser = useSelector(getCurrentUser());
    const { data, handleChange, errors, validate, handleKeyDown } = useForm(
        initialState,
        rewiewsValidatorConfig
    );

    const handleSubmit = () => {
        if (validate(data)) {
            const comment = {
                id: nanoid(),
                created_at: Date.now(),
                userId: currentUser.id,
                text: data.review,
                developerId: developerId
            };
            dispatch(createComment(comment));
        }
    };

    return (
        <FormComponent
            data={data}
            errors={errors}
            onSubmit={handleSubmit}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
        >
            <TextField
                name="review"
                value={data.reviews}
                onChange={handleChange}
                label="Ваши мысли..."
                placeholder=" "
                error={errors.review}
            />
            <Button>Опубликовать</Button>
        </FormComponent>
    );
};

export default ReviewsForm;
