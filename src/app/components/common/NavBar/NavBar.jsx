import React from "react";
import PropTypes from "prop-types";
import StyledNavLink from "../StyledNavLink";

const NavBar = ({ links, className = "" }) => {
    return (
        <nav className={className}>
            <ul>
                {links.map((link) => (
                    <li key={link.id}>
                        <StyledNavLink
                            className={link.linkClass}
                            to={link.path}
                        >
                            {link.name}
                        </StyledNavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

NavBar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string
};

export default NavBar;
