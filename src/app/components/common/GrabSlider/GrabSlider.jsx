import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Autoplay } from "swiper";

const TextSlider = ({ children }) => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
            >
                {React.Children.map(children, (child) => (
                    <SwiperSlide>{child}</SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

TextSlider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default TextSlider;
