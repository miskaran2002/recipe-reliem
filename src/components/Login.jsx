import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                toast.success("Login successful!");
                navigate(from, { replace: true },3500);
            })
            .catch(error => {
                toast.error("Login failed. Please check your credentials.");
                console.error('Login error:', error);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                toast.success("Logged in with Google!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error("Google login failed.");
                console.error('Google login error:', error);
            });
    };

    return (
        <div>
            <Navbar />
            <ToastContainer />
            <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-100 to-yellow-200'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md p-8 space-y-6 rounded-2xl shadow-2xl bg-white mb-6 mt-6"
                >
                    <h1 className="text-3xl font-bold text-center text-orange-600">Welcome Back 👋</h1>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
                        >
                            Login
                        </motion.button>
                    </form>

                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Forgot your password?{' '}
                            <Link to="/reset-password" className="text-orange-500 font-medium hover:underline">
                                Reset it
                            </Link>
                        </p>
                        <p className="text-sm mt-2 text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-orange-500 font-medium hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl hover:bg-orange-50 transition"
                        >
                            <FcGoogle className="text-xl" />
                            <span className="text-gray-700 font-medium">Continue with Google</span>
                        </button>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
