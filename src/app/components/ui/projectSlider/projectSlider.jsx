import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const ProjectSlider = ({ items, className, ...rest }) => {
    return (
        <Swiper
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="project-slider"
            mousewheel={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            {...rest}
        >
            {items.map((item) => (
                <SwiperSlide key={item} className={className}>
                    <img src={item} alt={item} className={className} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

ProjectSlider.defaultProps = {
    pagination: true
};

ProjectSlider.propTypes = {
    items: PropTypes.array.isRequired,
    className: PropTypes.string,
    pagination: PropTypes.bool.isRequired
};

export default ProjectSlider;
