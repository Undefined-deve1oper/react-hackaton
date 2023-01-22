import React from "react";
import PropTypes from "prop-types";

const Button = ({
    children,
    styleType = "animate",
    color = "DarkMagenta",
    rounding = true,
    ...rest
}) => {
    // styleType there are: 'animate', 'default', 'none'
    return (
        <button
            className={styleType + (rounding ? " rounding " : "")}
            style={{ backgroundColor: color }}
            {...rest}
        >
            <span></span>
            <span></span>
            <span></span>
            {children}
        </button>
    );
};

Button.defaultProps = {
    styleType: "animate",
    color: "DarkMagenta",
    rounding: false
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    styleType: PropTypes.string,
    color: PropTypes.string,
    rounding: PropTypes.bool
};

export default Button;
