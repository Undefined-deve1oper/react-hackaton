import React from "react";
import Button from "../Button";
import { useSwiper } from "swiper/react";
import PropTypes from "prop-types";

const SliderButton = ({ children, isNext, ...rest }) => {
    const swiper = useSwiper();

    const handleDirection = () => {
        return isNext ? swiper.slideNext() : swiper.slidePrev();
    };

    return (
        <Button onClick={handleDirection} {...rest}>
            {children}
        </Button>
    );
};

SliderButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    isNext: PropTypes.bool
};

export default SliderButton;
