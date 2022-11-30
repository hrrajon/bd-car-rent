import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { login, providerLogin } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
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
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <br />
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
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
                            <label className="label mt-2">
                                <p>
                                    Create and Account!{" "}
                                    <Link className="text-error" to="/signup">
                                        Signup
                                    </Link>
                                </p>
                            </label>
                            <div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-success">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
