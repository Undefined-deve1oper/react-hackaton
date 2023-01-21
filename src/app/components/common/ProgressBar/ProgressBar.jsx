import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ percentages, color, title }) => {
    return (
        <div className="progress-bar">
            <div
                style={{ width: percentages + "%" }}
                className="progress-bar__item"
            >
                <div className="progress-bar__label">
                    {title} - {`${percentages}%`}
                </div>
            </div>
            {/* {type === "circle" ? (
                <div className="progress-bar_circle">
                    <svg
                        strokeDashoffset={percentages}
                        className="progress-bar__svg"
                    >
                        <circle className="svg__track" />
                        <circle className="svg__indicator" />
                    </svg>
                    <div className="progress-bar__label">
                        <span className="progress-bar__label-text">
                            {percentages}%
                        </span>
                    </div>
                    <div className="progress-bar__title">
                        <h2 className="progress-bar__title-text">{title}</h2>
                    </div>
                </div>
            ) : (
                <div className="progress-bar__linear">
                    <progress
                        className="html5"
                        max="100"
                        value={percentages}
                    ></progress>
                    <span className="progress-bar__linear-text">
                        {percentages}%
                    </span>
                    <div className="progress-bar__title">
                        <h2 className="progress-bar__title-text">{title}</h2>
                    </div>
                </div>
            )} */}
        </div>
    );
};

ProgressBar.propTypes = {
    percentages: PropTypes.number.isRequired,
    title: PropTypes.string,
    type: PropTypes.string
};

export default ProgressBar;
