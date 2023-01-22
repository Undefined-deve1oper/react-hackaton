import React from "react";
import PropTypes from "prop-types";

const Button = ({
    children,
    styleType,
    color,
    bgColor,
    rounding,
    className,
    ...rest
}) => {
    return (
        <button
            className={className + ` ${styleType}`}
            style={{ backgroundColor: color, borderRadius: rounding }}
            {...rest}
        >
            {children}
            {styleType === "animate" && (
                <>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </>
            )}
        </button>
    );
};

Button.defaultProps = {
    styleType: "default"
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    styleType: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    rounding: PropTypes.string
};

export default Button;
