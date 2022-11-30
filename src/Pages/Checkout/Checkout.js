import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import "../../App.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Checkout = () => {
    const { title, _id, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || "unregistered";
        const phone = form.phone.value;
        const message = form.message.value;
        const reviews = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
        };
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("genius-token")}`,
            },
            body: JSON.stringify(reviews),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Review placed successfully");
                    form.reset();
                }
            })
            .catch((er) => console.error(er));
    };
    return (
        <section>
            <div>
                <div className="hero " style={{ backgroundImage: `url(${img})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>

                    <div className="hero-content text-center text-neutral-content">
                        <h2 className="text-3xl top1/4">Details:</h2>
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{description}</p>
                            <p className="text-info-600 text-2xl">Price:{price}$ Per Hour</p>
                        </div>
                    </div>
                </div>

                {/* another section */}

                <div className="pt-8">
                    <h2 className="text-3xl App text-orange-800 pb-6">
                        Review for {title}
                    </h2>
                    <form onSubmit={handlePlaceOrder}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="first name"
                                className="input input-bordered w-full "
                                name="firstName"
                                required
                            />
                            <input
                                type="text"
                                placeholder="last name"
                                className="input input-bordered w-full "
                                name="lastName"
                                required
                            />
                            <input
                                type="text"
                                placeholder="your phone"
                                className="input input-bordered w-full "
                                name="phone"
                                required
                            />
                            <input
                                type="email"
                                defaultValue={user?.email}
                                placeholder="your email"
                                className="input input-bordered w-full "
                                name="email"
                                readOnly
                                required
                            />
                            <textarea
                                className="textarea textarea-bordered h-24 w-full"
                                placeholder="Write Your Review Here"
                                name="message"
                            ></textarea>
                        </div>
                        <input
                            className="App btn btn-primary mt-2"
                            type="submit"
                            value="Place Your Review"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
