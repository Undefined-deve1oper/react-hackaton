import React from "react";
import PropTypes from "prop-types";

const CircleProgressBar = ({ percentages, text, color }) => {
    return (
        <div className="circle-progress-container">
            <div className="circle-progress">
                <div className="circle">
                    <div
                        style={{
                            "--i": `${percentages}`,
                        }}
                        className="mask full"
                    >
                        <div
                            style={{
                                "--i": `${percentages}`,
                                backgroundColor: color
                            }}
                            className="fill"
                        ></div>
                    </div>
                    <div className="mask half">
                        <div
                            style={{
                                "--i": `${percentages}`,
                                backgroundColor: color
                            }}
                            className="fill"
                        ></div>
                    </div>
                    <div className="inside-circle">{`${percentages}%`}</div>

                </div>
            </div>
            <div className="circle-progress__label">
                {text} - {`${percentages}%`}
            </div>
        </div>
    );
};

CircleProgressBar.defaultProps = {
    color: "blue"
};

CircleProgressBar.propTypes = {
    percentages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string
};

export default CircleProgressBar;
