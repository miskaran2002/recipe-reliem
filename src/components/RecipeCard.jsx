import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();
    const { _id, image, title, cuisineType, likes = 0 } = recipe;

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
            <img
                src={image || 'https://via.placeholder.com/400x250?text=No+Image'}
                alt={title}
                className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold text-gray-800 truncate">{title}</h3>
                <p className="text-gray-600 text-sm">Cuisine: {cuisineType}</p>
                <p className="text-gray-600 text-sm">❤️ {likes} Likes</p>

                <button
                    onClick={() => navigate(`/recipes/${_id}`)}
                    className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-sm transition"
                >
                    View Details
                </button>
            </div>
        </motion.div>
    );
};

export default RecipeCard;
