import React from "react";
import PropTypes from "prop-types";

const Button = ({
    children,
    styleType = "default",
    color = "DarkMagenta",
    rounding,
    className,
    ...rest
}) => {
    if (styleType === "animate") {
        return (
            <button
                className={className + ` ${styleType}`}
                style={{ backgroundColor: color, borderRadius: rounding }}
                {...rest}
            >
                {children}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        );
    }
    if (styleType === "none") {
        return (
            <button
                className={className}
                style={{ backgroundColor: color, borderRadius: rounding }}
                {...rest}
            >
                {children}
            </button>
        );
    }
    if (styleType === "default") {
        return (
            <button
                className={className + ` ${styleType}`}
                style={{ backgroundColor: color, borderRadius: rounding }}
                {...rest}
            >
                {children}
            </button>
        );
    }
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    styleType: PropTypes.string,
    color: PropTypes.string,
    rounding: PropTypes.string
};

export default Button;
