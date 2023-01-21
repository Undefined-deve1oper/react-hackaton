import React from "react";
import PropTypes from "prop-types";

const Main = ({ children }) => {
    return <main className="page">{children}</main>;
};

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Main;
