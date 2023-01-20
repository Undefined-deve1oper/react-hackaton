import React from "react";
import CustomNavLink from "../../common/CustomNavLink";

function NavBar() {
    return (
        <nav>
            <CustomNavLink to="/" name="Home" />
            <CustomNavLink to="/favorites" name="Favorites" />
        </nav>
    );
}

export default NavBar;
