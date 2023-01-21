import { useState, useEffect, useCallback } from "react";
import { validator } from "../utils/validator";

const useForm = (initialState, config) => {
    const [data, setData] = useState(initialState || {});
    const [errors, setErrors] = useState({});

    const handleChange = useCallback(({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    }, []);
    const validate = useCallback(
        (data) => {
            const errors = validator(data, config);
            setErrors(errors);
            return Object.keys(errors).length === 0;
        },
        [config, setErrors]
    );
    const submitValidate = useCallback(() => {
        const errors = validator(data, config);
        setErrors(errors);
    }, []);

    useEffect(() => {
        validate();
    }, [data]);

    return { data, handleChange, errors, submitValidate };
};

export default useForm;
