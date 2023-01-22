import React from "react";
import PropTypes from "prop-types";
import CircleProgressBar from "../CircleProgressBar";
import HorizontalProgressBar from "../HorizontalProgressBar";

const ProgressBar = ({ type, ...props }) => {
    return type === "circle" ? (
        <CircleProgressBar {...props} />
    ) : (
        <HorizontalProgressBar {...props} />
    );
};

ProgressBar.defaultProps = {
    type: "circle"
};

ProgressBar.propTypes = {
    type: PropTypes.string
};

export default ProgressBar;
