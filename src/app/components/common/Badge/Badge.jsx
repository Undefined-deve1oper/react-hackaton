import React from "react";
import PropTypes from "prop-types";

const Badge = ({ type, color }) => {
    return (
        <span style={{ backgroundColor: color }} className="badge">
            {type}
        </span>
    );
};

Badge.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Badge;
