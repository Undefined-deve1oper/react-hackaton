import { useState, useEffect, useCallback } from "react";
import { validator } from "../utils/validator";

const useForm = (initialState, config, validateOnChange) => {
    const [data, setData] = useState(initialState || {});
    const [errors, setErrors] = useState({});
    const [enterError, setEnterError] = useState(null);

    useEffect(() => {
        validate();
    }, [data]);

    const validate = useCallback(
        (data) => {
            const errors = validator(data, config);
            setErrors(errors);
            return Object.keys(errors).length === 0;
        },
        [config, setErrors]
    );

    const handleChange = useCallback(
        ({ target }) => {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
            setEnterError(null);
            setErrors({});
            if (validateOnChange) validate({ [target.name]: target.value });
        },
        [validateOnChange, validate]
    );

    const handleKeyDown = useCallback((event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            const form = event.target.form;
            const formElements = [...form.elements].filter(
                (el) =>
                    el.tagName.toLowerCase() === "input" ||
                    el.tagName.toLowerCase() === "button"
            );
            const indexField = Array.prototype.indexOf.call(
                formElements,
                event.target
            );
            formElements[indexField + 1].focus();
        }
    }, []);

    return { data, handleChange, errors, enterError, handleKeyDown, validate };
};

export default useForm;
