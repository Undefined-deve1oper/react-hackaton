import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import SliderButton from "../../common/SliderButton/SliderButton";
import SvgIcon from "../../common/SvgIcon";

const ProjectSlider = ({ items, className, ...rest }) => {
    return (
        <Swiper
            navigation={{
                nextEl: ".slider__item .next",
                prevEl: ".slider__item .prev",
                disabledClass: "slider__item .disabled"
            }}
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
                    />
                </SwiperSlide>
            ))}
            <SliderButton
                isNext={false}
                styleType="none"
                className={className + "__item prev"}
            >
                <SvgIcon name="arrow-left" width="20" height="20" />
            </SliderButton>
            <SliderButton
                isNext={true}
                styleType="none"
                className={className + "__item next"}
            >
                <SvgIcon name="arrow-left" width="20" height="20" />
            </SliderButton>
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
