import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import SliderButton from "../../common/SliderButton";
import SvgIcon from "../../common/SvgIcon";

import "swiper/css";
import "swiper/css/pagination";

const MainSlider = ({ items, className, ...rest }) => {
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
            {items.map((item, index) => (
                <SwiperSlide key={item + index}>
                    <div
                        className={className + " slider"}
                        style={{
                            backgroundImage: `url(${item})`
                        }}
                    />
                </SwiperSlide>
            ))}
            <SliderButton
                isNext={false}
                styleType="none"
                className={className + " slider__item prev"}
            >
                <SvgIcon name="arrow-left" width="20" height="20" />
            </SliderButton>
            <SliderButton
                isNext={true}
                styleType="none"
                className={className + " slider__item next"}
            >
                <SvgIcon name="arrow-left" width="20" height="20" />
            </SliderButton>
        </Swiper>
    );
};

MainSlider.defaultProps = {
    pagination: true
};

MainSlider.propTypes = {
    items: PropTypes.array.isRequired,
    className: PropTypes.string,
    pagination: PropTypes.bool.isRequired
};

export default MainSlider;
