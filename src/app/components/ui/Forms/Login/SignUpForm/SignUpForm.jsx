import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../../../hooks/useForm";
import { signUpValidatorConfig } from "../../../../../utils/validatorConfig";
import Button from "../../../../common/Button";
import FormComponent, { TextField } from "../../../../common/Fields";

const initialState = {
    name: "",
    email: "",
    password: ""
};

const SignUpForm = () => {
    const navigate = useNavigate();
    const { data, errors, handleChange, handleKeyDown, validate } = useForm(
        initialState,
        signUpValidatorConfig,
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
            <Button styleType={"animate"}>Создать аккаунт</Button>
        </FormComponent>
    );
};

export default SignUpForm;
