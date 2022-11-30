import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
    const { serviceName, customer, email, price, service, _id, status } =
        review;
    const [reviewService, setReviewService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then((res) => res.json())
            .then((data) => setReviewService(data));
    }, [service]);
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
                        X
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {reviewService?.img && (
                                <PhotoProvider>
                                    <PhotoView src={reviewService.img}>
                                        <img
                                            src={reviewService.img}
                                            alt="Avatar Tailwind CSS Component"
                                        />
                                    </PhotoView>
                                </PhotoProvider>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>

            <th>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs"
                >
                    {status ? status : "pending"}
                </button>
            </th>
        </tr>
    );
};

export default ReviewRow;
