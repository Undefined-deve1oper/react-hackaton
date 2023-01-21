import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { validator } from "../../../../utils/validator";

const FormComponent = ({
    children,
    validatorConfig,
    onSubmit,
    onChange,
    defaultData
}) => {
    const [data, setData] = useState(defaultData || {});
    const [errors, setErrors] = useState({});
    const prevData = useRef(null);

    const validate = useCallback(
        (data) => {
            const errors = validator(data, validatorConfig);
            setErrors(errors);
            return Object.keys(errors).length === 0;
        },
        [validatorConfig, setErrors]
    );

    useEffect(() => {
        prevData.current = data;
    }, []);
    useEffect(() => {
        if (Object.keys(data).length > 0) {
            validate(data);
        }
    }, [data, validate]);

    const handleChange = useCallback(
        (target) => {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
            onChange && onChange();
        },
        [onChange]
    );
    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            const isValid = validate();
            if (!isValid) return null;
            onSubmit(data);
        },
        [data, onSubmit, validate]
    );
    const handleKeyDown = useCallback((event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            const form = event.target.form;
            const indexField = Array.prototype.indexOf.call(form, event.target);
            form.elements[indexField + 1].focus();
        }
    }, []);

    const isValid =
        Object.keys(errors).length === 0 &&
        JSON.stringify(prevData.current) !== JSON.stringify(data);

    const clonedElements = React.Children.map(children, (child) => {
        const childType = typeof child.type;
        let config = {};

        if (childType === "function") {
            if (!child.props.name) {
                throw new Error(
                    "Name property is required for field component",
                    child
                );
            }
            config = {
                ...child.props,
                onChange: handleChange,
                value: data[child.props.name] || "",
                error: errors[child.props.name],
                onKeyDown: handleKeyDown
            };
            if (child.type.name === "CheckBoxField") {
                config.value = data[child.props.name];
            }
        }
        if (childType === "string") {
            if (child.type === "button") {
                if (
                    child.props.type === "submit" ||
                    child.props.type === undefined
                ) {
                    config = {
                        ...child.props,
                        disabled: !isValid || child.props.disabled
                    };
                }
            }
        }
        return React.cloneElement(child, config);
    });

    return <form onSubmit={handleSubmit}>{clonedElements}</form>;
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    defaultData: PropTypes.object,
    validatorConfig: PropTypes.object,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
};

export default FormComponent;
