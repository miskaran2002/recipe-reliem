import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import { Link } from 'react-router';

const Overview = () => {
    const { user } = useContext(AuthContext);
    const [totalRecipes, setTotalRecipes] = useState(0);
    const [myRecipeCount, setMyRecipeCount] = useState(0);

    useEffect(() => {
        // 1. Total recipes
        fetch('https://recipe-server-beta.vercel.app/recipes')
            .then(res => res.json())
            .then(data => {
                setTotalRecipes(data.length);
            });

        // 2. My recipes
        if (user?.email) {
            fetch(`https://recipe-server-beta.vercel.app/recipes?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyRecipeCount(data.length);
                });
        }
    }, [user?.email]);

    return (
        <div>

            <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-orange-600 text-center">Dashboard Overview</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        className="bg-orange-100 p-6 rounded-2xl text-center shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <h3 className="text-lg font-semibold">Total Recipes</h3>
                        <p className="text-3xl text-orange-600 font-bold">{totalRecipes}</p>
                    </motion.div>

                    <motion.div
                        className="bg-orange-100 p-6 rounded-2xl text-center shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <h3 className="text-lg font-semibold">My Recipes</h3>
                        <p className="text-3xl text-orange-600 font-bold">{myRecipeCount}</p>
                    </motion.div>

                    <motion.div
                        className="bg-orange-100 p-6 rounded-2xl text-center shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <h3 className="text-lg font-semibold">User</h3>
                        <p className="text-xl text-orange-600">{user?.displayName || 'Anonymous'}</p>
                    </motion.div>
                </div>
            </motion.div>


            {/* Back to Home Button */}
            <div className="mt-12 text-center">
                <Link to="/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition">
                    ← Back to Home
                </Link>
            </div>
        </div>



    );
};

export default Overview;
