import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../../../hooks/useForm";
import { signInValidatorConfig } from "../../../../../utils/validatorConfig";
import Button from "../../../../common/Button";
import FormComponent, { TextField } from "../../../../common/Fields";
import { useDispatch, useSelector } from "react-redux";
import { getAuthSignInError, signIn } from "../../../../../store/slices/auth";

const initialState = {
    email: "",
    password: ""
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, errors, handleChange, handleKeyDown, validate } = useForm(
        initialState,
        signInValidatorConfig,
        false
    );
    const authErrors = useSelector(getAuthSignInError());

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate(data)) {
            dispatch(signIn(data, navigate));
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
            <Button styleType={"animate"}>Войти</Button>
        </FormComponent>
    );
};

export default SignInForm;
