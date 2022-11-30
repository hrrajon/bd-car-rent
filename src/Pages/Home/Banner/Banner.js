import React from "react";
import Banner1 from "../../../assets/homeCarousel/banner1.jpg";
import Banner2 from "../../../assets/homeCarousel/banner2.jpg";
import Banner3 from "../../../assets/homeCarousel/banner3.jpg";
import Banner4 from "../../../assets/homeCarousel/banner4.jpg";
import "./Banner.css";
import BannerItems from "./BannerItems";

const Banner = () => {
    const bannerData = [
        {
            image: Banner1,
            prev: 4,
            id: 1,
            next: 2,
        },
        {
            image: Banner2,
            prev: 1,
            id: 2,
            next: 3,
        },
        {
            image: Banner3,
            prev: 2,
            id: 3,
            next: 4,
        },
        {
            image: Banner4,
            prev: 3,
            id: 4,
            next: 1,
        },
    ];
    return (
        <div className="carousel w-full py-0 mb-10">
            {bannerData.map((slide) => (
                <BannerItems key={slide.id} slide={slide}></BannerItems>
            ))}
        </div>
    );
};

export default Banner;
