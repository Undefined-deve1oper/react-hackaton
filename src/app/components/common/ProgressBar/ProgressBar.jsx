import React from "react";
import "./_progressBar.scss";

const ProgressBar = (props) => {
    return (
        <div class="svg-pi-group">
            <svg strokeDashoffset="184" class="svg-pi svg-pi-25">
                <circle class="svg-pi-track" />
                <circle class="svg-pi-indicator" />
            </svg>
            {/* <div className="svg-pi-label">
                <span className="svg-pi-label__loading">123</span>
            </div> */}
        </div>
    );
};

export default ProgressBar;
