import React from "react";
import "../../App.css";
import img1 from "../../assets/about/rajon.jpg";
import img2 from "../../assets/about/tanvir.jpg";
const Blogs = () => {
    return (
        <div>
            <h2 className="text-5xl font-semibold text-center">About Us</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: Md. Harun Or Rashid</h2>
                        <p>ID: 193-15-2966</p>
                        <p>Section: PC A</p>
                        <div className="card-actions justify-end">
                            <a href="https://resplendent-shortbread-d3289c.netlify.app/"><button className="btn btn-primary">Portfolio</button></a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: Md.Tanvir Ahmed</h2>
                        <p>ID: 192-15-13085</p>
                        <p>Section: PC A</p>
                        <div className="card-actions justify-end">
                            <a href="https://dev-tanvir-1294.github.io/portfolio/#include"><button className="btn btn-primary">Portfolio</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
