import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ percentages }) => {
    return (
        <div className="svg-pi-group">
            <svg strokeDashoffset={percentages} className="svg-pi svg-pi-25">
                <circle className="svg-pi-track" />
                <circle className="svg-pi-indicator" />
            </svg>
            {/* <div classNameName="svg-pi-label">
                <span classNameName="svg-pi-label__loading">123</span>
            </div> */}
        </div>
    );
};

ProgressBar.propTypes = {
    percentages: PropTypes.number.isRequired
};

export default ProgressBar;
