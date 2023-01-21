import React from "react";
import logoIcon from "../../../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to="/" className={"logo"} end>
            <img src={logoIcon} alt="logo" />
            <div className="logo__info">
                <span>React </span>
                Team 2
            </div>
        </NavLink>
    );
};

export default Logo;
