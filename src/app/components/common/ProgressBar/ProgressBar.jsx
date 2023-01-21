import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ percentages, color, title, type = "circle" }) => {
    return (
        <>
            {type === "circle" ? (
                <div className="circle-progress">
                    <div className="circle">
                        <div
                            style={{
                                "--i": `${percentages}`
                            }}
                            className="mask full"
                        >
                            <div
                                style={{
                                    "--i": `${percentages}`
                                }}
                                className={"fill " + color}
                            ></div>
                        </div>
                        <div className="mask half">
                            <div
                                style={{
                                    "--i": `${percentages}`
                                }}
                                className={"fill " + color}
                            ></div>
                        </div>
                        <div className="inside-circle">{`${percentages}%`}</div>
                        <div className="circle-progress__label">
                            {title} - {`${percentages}%`}
                        </div>
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
