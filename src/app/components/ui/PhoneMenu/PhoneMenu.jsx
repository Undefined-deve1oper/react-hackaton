import React from "react";
import PropTypes from "prop-types";
import StyledNavLink from "../../common/StyledNavLink";

const PhoneMenu = ({ links, open, close }) => {
    return (
        <div className={`header__menu ${open ? "header__menu_active" : ""}`}>
            <ul className={"header__list"}>
                {links.map((link) => (
                    <li key={link.id} className={"header__item"}>
                        <StyledNavLink
                            className={"header__link"}
                            onClick={() => close()}
                            to={link.path}
                        >
                            {link.name}
                        </StyledNavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

PhoneMenu.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
    open: PropTypes.bool,
    close: PropTypes.func
};

export default PhoneMenu;
