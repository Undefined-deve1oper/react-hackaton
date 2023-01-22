import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../../../hooks/useForm";
import { getAuthSignUpError, signUp } from "../../../../../store/slices/auth";
import { signUpValidatorConfig } from "../../../../../utils/validatorConfig";
import Button from "../../../../common/Button";
import FormComponent, { TextField } from "../../../../common/Fields";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
    name: "",
    email: "",
    password: ""
};

const SignUpForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, errors, handleChange, handleKeyDown, validate } = useForm(
        initialState,
        signUpValidatorConfig,
        false
    );
    const authErrors = useSelector(getAuthSignUpError());

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate(data)) {
            dispatch(signUp(data, navigate));
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
                autoFocus
                id="name"
                name="name"
                placeholder="Введите имя..."
                autoComplete="off"
            />
            <TextField
                id="email"
                name="email"
                placeholder="Введите email..."
                autoComplete="off"
            />
            <TextField
                id="password"
                name="password"
                type="password"
                placeholder="Введите пароль..."
                autoComplete="off"
            />
            <>
                {authErrors && (
                    <p className="login-form__error">{authErrors}</p>
                )}
            </>
            <Button styleType={"animate"}>Создать аккаунт</Button>
        </FormComponent>
    );
};

export default SignUpForm;
