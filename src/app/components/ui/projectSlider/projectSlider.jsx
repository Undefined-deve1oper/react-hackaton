import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const ProjectSlider = ({ items, className, ...rest }) => {
    console.log(className);
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
                <SwiperSlide key={item}>
                    <div
                        className={className}
                        style={{
                            backgroundImage: `url(${item})`
                        }}
                    ></div>
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
