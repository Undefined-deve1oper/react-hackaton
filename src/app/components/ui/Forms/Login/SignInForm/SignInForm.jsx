import React from "react";
import useForm from "../../../../../hooks/useForm";
import { signInValidatorConfig } from "../../../../../utils/validatorConfig";
import Button from "../../../../common/Button";
import FormComponent, { TextField } from "../../../../common/Fields";

const initialState = {
    email: "",
    password: ""
};

const SignInForm = () => {
    const { data, errors, handleChange, handleKeyDown, validate } = useForm(
        initialState,
        signInValidatorConfig,
        false
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate(data)) {
            console.log("fsdf");
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
            />
            <TextField
                id="password"
                name="password"
                type="password"
                placeholder="Введите пароль..."
            />
            <Button>Войти</Button>
        </FormComponent>
    );
};

export default SignInForm;