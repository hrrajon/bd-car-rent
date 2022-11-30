import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Checkout from "../../Pages/Checkout/Checkout";
import Error from "../../Pages/Home/Home/Error";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/SignUp/Signup";
import Reviews from "../../Pages/Reviews/Reviews";
import PrivateRoute from "../PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/reviews",
                element: <Reviews></Reviews>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
            {
                path: "/checkout/:id",
                element: (
                    <PrivateRoute>
                        <Checkout></Checkout>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `http://localhost:5000/services/${params.id}`
                    ),
            },
            {
                path: "/reviews",
                element: <Reviews></Reviews>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "*",
                element: <Error></Error>,
            },
        ],
    },
]);

export default router;
