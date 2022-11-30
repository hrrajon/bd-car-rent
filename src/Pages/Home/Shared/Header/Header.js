import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo3 from "../../../../assets/logo3.png";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then().catch();
    };
    const menuItem = (
        <>
            <li>
                <Link className="font-semibold" to="/">
                    Home
                </Link>
                <Link className="font-semibold" to="/services">
                    Service
                </Link>
                <Link className="font-semibold" to="/blogs">
                    About Us
                </Link>
                {user?.email ? (
                    <>
                        <Link className="font-semibold" to="/reviews">
                            My reviews
                        </Link>
                        <Link onClick={handleLogOut} className="font-semibold">
                            Log Out
                        </Link>
                    </>
                ) : (
                    <Link className="font-semibold" to="/login">
                        Login
                    </Link>
                )}
            </li>
        </>
    );
    return (
        <div data-theme="acid" className="navbar h-20 mb-8 bg-green-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItem}
                    </ul>
                </div>
                <Link
                    to="/"
                    href="/"
                    className="logo3 btn btn-ghost normal-case text-xl"
                >
                    <img src={logo3} alt="" />
                </Link>
                <h2 className="text-3xl font-semibold">
                    <i>BD CAR RENT</i>
                </h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItem}</ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline">Appointment</button>
            </div>
        </div>
    );
};

export default Header;
