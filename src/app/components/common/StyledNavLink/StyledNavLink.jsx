import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const StyledNavLink = ({
    children,
    to,
    end = false,
    className = "",
    ...rest
}) => {
    const classNavLink = ({ isActive }) =>
        isActive ? className + " _active" : className;

    return (
        <NavLink className={classNavLink} end={end} to={to} {...rest}>
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
    end: PropTypes.bool,
    className: PropTypes.string
};

export default StyledNavLink;
