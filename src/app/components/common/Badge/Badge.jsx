import React from "react";
import PropTypes from "prop-types";

const Badge = ({ text, className = 'defaul', bgColor = '', textColor = '' }) => {

    if (!text.length) {
        return null;
    }

    return <span className={`badge badge_${className}`} style={{ backgroundColor: bgColor, color: textColor }}>{text}</span>;
};

Badge.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
};

export default Badge;
