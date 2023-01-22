import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, ...rest }) => {
    return (
        <button className={"button"} {...rest}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default Button;
