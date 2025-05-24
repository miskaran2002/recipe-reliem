import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { AuthContext } from '../Provider/AuthProvider';

const RecipeCard = ({ recipe }) => {
    // console.log(recipe);
    const navigate = useNavigate();
    const { _id, image, title, cuisine, likes: initialLikes = 0 } = recipe;

    const [likes, setLikes] = useState(initialLikes);
    const [isLiking, setIsLiking] = useState(false);

    const { user } = useContext(AuthContext);

    const isOwnRecipe = user?.email === recipe.ownerEmail;

    const handleLike = async () => {
        if (isLiking || isOwnRecipe) return;
        setLikes(prev => prev + 1);
        setIsLiking(true);

        try {
            const res = await fetch(`https://server-side-assi-9-production.up.railway.app/recipes/${_id}/like`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await res.json();

            if (!data.success) {
                // Rollback if backend fails
                setLikes(prev => prev - 1);
                alert('Failed to like. Try again.');
            }
        } catch (err) {
            console.error(err);
            setLikes(prev => prev - 1);
            alert('Server error. Please try again later.');
        } finally {
            setIsLiking(false);
        }
    };

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
                <p className="text-gray-600 text-sm">Cuisine: {cuisine}</p>

                <p
                    className="text-gray-600 text-sm cursor-pointer hover:text-orange-500 transition"
                    onClick={handleLike}
                    title="Click to like"
                >
                    ❤️ {likes} Likes
                </p>
                <Link to={`/recipe/${_id}`}>
                    <button
                        className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-sm transition"
                    >
                        View Details
                    </button>
                </Link>

            </div>
        </motion.div>
    );
};

export default RecipeCard;
