import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);
    const url = `http://localhost:5000/reviews?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, [user?.email]);
    const handleDelete = (id) => {
        const proceed = window.confirm("are you sure you want to cancel the order");
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remining = reviews.filter((rev) => rev._id !== id);
                        setReview(remining);
                    }
                });
        }
    };

    const handleStatusUpdate = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status: "approved" }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remining = reviews.filter((rev) => rev._id !== id);
                    const approving = reviews.find((rev) => rev._id === id);
                    approving.status = "Approved";
                    const newOrders = [...remining, approving];
                    setReview(newOrders);
                }
            });
    };
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Review For</th>

                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {reviews.map((review) => (
                        <ReviewRow
                            handleDelete={handleDelete}
                            key={review._id}
                            review={review}
                            handleStatusUpdate={handleStatusUpdate}
                        ></ReviewRow>
                    ))}
                    {/* <!-- row 2 --> */}
                </tbody>
            </table>
        </div>
    );
};

export default Reviews;
