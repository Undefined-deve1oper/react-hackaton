import React, { useState } from "react";
import { signInValidatorConfig } from "../../../../../utils/validatorConfig";
import Button from "../../../../common/Button";
import FormComponent, { TextField } from "../../../../common/Fields";

const initialState = {
    email: "",
    password: ""
};

const SignInForm = () => {
    const [data, setData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <FormComponent
            onSubmit={handleSubmit}
            validatorConfig={signInValidatorConfig}
            defaultData={data}
        >
            <div className="form__item">
                <TextField
                    id="email"
                    autoFocus
                    name="email"
                    placeholder="Введите email..."
                />
            </div>
            <div className="form__item">
                <TextField
                    name="password"
                    type="password"
                    placeholder="Введите пароль..."
                />
            </div>
            <Button>Войти</Button>
        </FormComponent>
    );
};

export default SignInForm;
