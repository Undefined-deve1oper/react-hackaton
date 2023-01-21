import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../common/NavBar";

const MobileMenu = ({ links, open }) => {
    return (
        <div className={`mobile-menu__container ${open ? " _active" : ""}`}>
            <NavBar links={links} className={"mobile-menu__content"} />
        </div>
    );
};

MobileMenu.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
    open: PropTypes.bool
};

export default MobileMenu;
