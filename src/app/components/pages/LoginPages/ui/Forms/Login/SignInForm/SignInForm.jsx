import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../../../hooks/useForm";
import { signInValidatorConfig } from "../../../../../utils/validatorConfig";
import Button from "../../../../common/Button";
import FormComponent, { TextField } from "../../../../common/Fields";

const initialState = {
    email: "",
    password: ""
};

const SignInForm = () => {
    const navigate = useNavigate();
    const { data, errors, handleChange, handleKeyDown, validate } = useForm(
        initialState,
        signInValidatorConfig,
        false
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate(data)) {
            navigate("/");
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
            <Button styleType={"animate"}>Войти</Button>
        </FormComponent>
    );
};

export default SignInForm;
