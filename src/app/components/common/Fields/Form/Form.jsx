import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { validator } from "../../../../utils/validator";

const FormComponent = ({
    children,
    handleChange,
    data,
    errors,
    handleKeyDown,
    ...rest
}) => {
    const clonedElements = React.Children.map(children, (child) => {
        const item = child;
        const childType = typeof child;
        let config = {};

        if (childType === "object") {
            config = {
                ...item.props,
                onChange: handleChange,
                value: data[item.props.name],
                error: errors?.[item.props.name],
                onKeyDown: handleKeyDown
            };
        }
        return React.cloneElement(item, config);
    });

    return <form {...rest}>{clonedElements}</form>;
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    defaultData: PropTypes.object,
    validatorConfig: PropTypes.object,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    validateOnChange: PropTypes.bool
};

export default FormComponent;
