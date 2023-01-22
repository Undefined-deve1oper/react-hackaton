import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SvgIcon from "../SvgIcon/SvgIcon";

const ProgressBar = ({ progress = "", text = "", color = "blue" }) => {
    const [progressStyle, setProgressStyle] = useState({});

    // Идея с анимацией была взята со статьи https://reactjsexample.com/a-linear-progressbar-component-for-react/
    useEffect(() => {
        const timeout = setTimeout(() => {
            const style = {
                opacity: 1,
                width: `${progress}%`,
                background: color
            };

            setProgressStyle(style);
        }, 250);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <div className="progress__text">{text}</div>
            <div className="progress">
                <span className="progress__done" style={progressStyle}>
                    {progress} %
                </span>
            </div>
        </>
    );
};

ProgressBar.propTypes = {
    progress: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string
};

export default ProgressBar;
