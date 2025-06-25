import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const { email, password, name, photo } = Object.fromEntries(formData.entries());

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 6 characters and include uppercase and lowercase letters.');
            return;
        } else {
            setPasswordError('');
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;

                // Update profile with name and photo
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    // Save user to backend
                    fetch('https://recipe-server-beta.vercel.app/users', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, name, photo }),
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    icon: "success",
                                    title: "Registered Successfully!",
                                    timer: 1500,
                                    showConfirmButton: false,
                                    position: 'top-end'
                                });
                                navigate('/');
                            }
                        });
                }).catch(err => {
                    toast.error("Profile update failed: " + err.message, {
                        position: 'top-center',
                        autoClose: 3000
                    });
                });

            })
            .catch(error => {
                toast.error(error.message, {
                    position: 'top-center',
                    autoClose: 3000,
                });
            });
    };

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                const { email, displayName, photoURL } = user;

                // Save to backend (if needed)
                fetch('https://recipe-server-beta.vercel.app/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, name: displayName, photo: photoURL }),
                });

                navigate('/');
            })
            .catch(error => {
                toast.error(error.message, {
                    position: 'top-center',
                    autoClose: 3000,
                });
            });
    };

    return (
        <div>
            <Navbar />
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
                            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
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

                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition"
                    >
                        Sign Up with Google
                    </button>

                    <p className="text-sm text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-orange-500 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
