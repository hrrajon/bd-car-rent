import React from 'react';
import img1 from "../../../assets/Body/img-01.jpg";
import img2 from "../../../assets/Body/img-02.jpg";
import img3 from "../../../assets/Body/img-03.jpg";

const ThreeCard = () => {
    return (
        <div className='m-10'>
            <h2 className="text-5xl font-semibold text-center">Why bd car rent?</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Veriety of choices</h2>
                        <p>In Our car service, there are a lot of car options and Veriety of car are available</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hassle free service</h2>
                        <p>We will provide hassle free service all the time for our customer</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">24 hours support</h2>
                        <p>We will provide 24 hours call support service to our customer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeCard;