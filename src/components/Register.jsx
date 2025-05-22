import React, { use } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { div } from 'framer-motion/client';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser,setUser}=use(AuthContext);
    const handleRegister = (event) => {
        event.preventDefault();
        console.log(event.target);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log({name, email, password, photo});
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.error('Error creating user:', error);
            });

    }
        

        // Add your registration logic here

    

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md p-8 space-y-6 rounded-2xl shadow-2xl bg-white mb-6 mt-6"
                >
                    <h1 className="text-3xl font-bold text-center text-orange-600">Create an Account ✨</h1>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                        </div>

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
                            <label className="block mb-1 text-sm font-medium text-gray-700">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter photo URL"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
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
                            Register
                        </motion.button>
                    </form>

                    <p className="text-sm text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-orange-500 font-medium hover:underline">
                            Login
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

export default Register;
