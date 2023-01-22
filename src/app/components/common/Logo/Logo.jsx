import React from "react";
import { NavLink } from "react-router-dom";
import SvgIcon from "../SvgIcon/SvgIcon";

const Logo = () => {
    return (
        <NavLink to="/" className={"logo"} end>
            <SvgIcon name="logo" width="25" height="24" />
            <div className="logo__info">
                <span>React</span>
                Team #1
            </div>
        </NavLink>
    );
};

export default Logo;
