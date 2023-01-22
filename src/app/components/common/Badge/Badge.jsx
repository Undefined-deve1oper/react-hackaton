import React from "react";
import PropTypes from "prop-types";

const Badge = ({ text, color }) => {
    return <span className={`badge ${color}`}>{text}</span>;
};

Badge.defaultProps = {
    text: "Красавчик",
    color: "soft-blue"
};

Badge.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
};

export default Badge;
