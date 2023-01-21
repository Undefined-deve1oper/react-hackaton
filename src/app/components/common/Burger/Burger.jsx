import React from "react";
import PropTypes from "prop-types";

const Burger = ({ open, onToggle }) => {
    return (
        <button type="button" className={`icon-menu`} onClick={onToggle}>
            <span className={open ? " _active" : ""}></span>
        </button>
    );
};

Burger.propTypes = {
    open: PropTypes.bool,
    onToggle: PropTypes.func.isRequired
};

export default Burger;
