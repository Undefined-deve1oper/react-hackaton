import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ src, alt = "avatar", size = "200", ...rest }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={"card-img"}
            style={{ width: `${size}px`, height: `${size}px` }}
            {...rest}
        />
    );
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Avatar;
