import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const StyledNavLink = ({ children, to, className, ...rest }) => {
    const classNavLink = ({ isActive }) =>
        isActive ? className + " _active" : className;

    return (
        <NavLink className={classNavLink} to={to} end {...rest}>
            {children}
        </NavLink>
    );
};

StyledNavLink.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    to: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default StyledNavLink;
