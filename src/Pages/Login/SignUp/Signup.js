import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Signup = () => {
    const { createUser, providerLogin } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch((err) => console.error(err));
    };
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.log(error));
    };
    const gitHubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(gitHubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.log(error));
    };
    return (
        <div className="hero w-full my-2">
            <div className="hero-content grid gap-0 md:grid-cols-1 flex-col lg:flex-row">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign up!</h1>
                </div>
                <br />
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <p>
                                    Already Had An Account?{" "}
                                    <Link className="text-error" to="/login">
                                        Login
                                    </Link>
                                </p>
                            </label>
                            <p className="text-2xl mt-2">
                                Login with:{" "}
                                <button onClick={handleGoogleSignIn}>
                                    <FaGoogle></FaGoogle>
                                </button>{" "}
                                &{" "}
                                <button onClick={handleGithubSignIn}>
                                    <FaGithub></FaGithub>
                                </button>
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-success">Sign Up</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Signup;
