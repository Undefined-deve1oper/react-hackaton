import { useCallback } from "react";
import { useState, useEffect } from "react";
import { validator } from "../utils/validator";

const useForm = (initialState, config) => {
    const [data, setData] = useState(initialState || {});
    const [errors, setErrors] = useState({});

    const handleChange = useCallback(({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    }, []);

    useEffect(() => {
        validate();
    }, [data]);

    const validate = useCallback(
        (data) => {
            const errors = validator(data, validatorConfig);
            setErrors(errors);
            return Object.keys(errors).length === 0;
        },
        [validatorConfig, setErrors]
    );

    const submitValidate = useCallback(() => {
        const errors = validator(data, config);
        setErrors(errors);
    }, []);

    return { data, handleChange, errors, submitValidate };
};

export default useForm;
