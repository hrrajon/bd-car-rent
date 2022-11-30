import React from "react";
import "./Banner.css";

const BannerItems = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="carousel-img">
                <img src={image} className="w-full" alt="" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2  left-24  top-1/4">
                <h3 className="text-5xl text-white font-bold">
                    Best Car Rental service <br />
                    In Bangladesh
                </h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-24 text-xl w-2/5  top-1/2">
                <p className="text-white toto">
                    We will provide best services ,all over Bangladesh. We hope that our car driver get the best services to our customer and reach the passanger to their destination.
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn btn-outline btn-success">Learn More</button>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">
                    ❮
                </a>
                <a href={`#slide${next}`} className="btn btn-circle">
                    ❯
                </a>
            </div>
        </div>

    );
};

export default BannerItems;
