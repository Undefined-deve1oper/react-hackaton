import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ percentages, color, title, type = "circle" }) => {
    return (
        <>
            {type === "circle" ? (
                <div class="circle-wrap">
                    <div class="circle">
                        <div class="mask full">
                            <div class="fill"></div>
                        </div>
                        <div class="mask half">
                            <div class="fill"></div>
                        </div>
                        <div class="inside-circle"> {`${percentages}%`} </div>
                    </div>
                </div>
            ) : (
                <div className="progress-bar">
                    <div
                        style={{ width: percentages + "%" }}
                        className="progress-bar__item"
                    >
                        <div className="progress-bar__label">
                            {title} - {`${percentages}%`}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

ProgressBar.propTypes = {
    percentages: PropTypes.number.isRequired,
    title: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string
};

export default ProgressBar;
