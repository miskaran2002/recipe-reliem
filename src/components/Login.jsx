import React, { use } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { div } from 'framer-motion/client';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
    const {signIn} = use(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        console.log(event.target);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('Error creating user:', error);
            });
       
    }


    return (
       <div>  
        <div>
            <Navbar></Navbar>
        </div>
            <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-100 to-yellow-200'>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md p-8 space-y-6 rounded-2xl shadow-2xl mb-6 mt-6 bg-white"
                >
                    <h1 className="text-3xl font-bold text-center text-orange-600">Welcome Back 👋</h1>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="Enter your password"
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
                    <p className="text-sm text-center text-gray-600">
                        Forgot your password?{' '}
                        <Link to="/reset-password" className="text-orange-500 font-medium hover:underline">
                            Reset it
                        </Link>
                    </p>

                    <p className="text-sm text-center text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-orange-500 font-medium hover:underline">
                            Register
                        </Link>
                    </p>
                </motion.div>

            </div>  
            <div>
                <Footer></Footer>
            </div>

       </div>
    );
};

export default Login;
