import React from "react";
import { NavLink } from "react-router-dom";

function CustomNavLink({ name, to }) {
    const classNavLink = (isActive) =>
        isActive ? "background-color: blue;" : "background-color: red;";

    return (
        <NavLink className={classNavLink} to={to} end>
            {name}
        </NavLink>
    );
}

export default CustomNavLink;
