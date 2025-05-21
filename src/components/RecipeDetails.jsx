import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const RecipeDetails = () => {
    const recipe = useLoaderData();
    const navigate = useNavigate();

    const {
        _id,
        image,
        title,
        ingredients,
        instructions,
        cuisine,
        prepTime,
        categories,
    } = recipe;

    const handleUpdate = () => {
        navigate(`/updateRecipe/${_id}`);
    };

    const handleDelete = () => {
        const confirm = window.confirm('Are you sure you want to delete this recipe?');
        if (confirm) {
            fetch(`http://localhost:5000/recipes/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Recipe deleted successfully');
                        navigate('/allRecipes');
                    }
                });
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
                {/* Large Image */}
                <img
                    src={image || 'https://via.placeholder.com/800x400?text=No+Image'}
                    alt={title}
                    className="w-full h-[400px] object-cover"
                />

                <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold text-orange-600">{title}</h2>

                        <div className="flex gap-3">
                            <button
                                onClick={handleUpdate}
                                className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition"
                            >
                                <FiEdit /> Update
                            </button>
                            <button
                                onClick={handleDelete}
                                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                            >
                                <FiTrash2 /> Delete
                            </button>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="text-gray-700 space-y-1">
                        <p><span className="font-semibold">Cuisine:</span> {cuisine}</p>
                        <p><span className="font-semibold">Preparation Time:</span> {prepTime} minutes</p>
                        <p><span className="font-semibold">Category:</span> {categories}</p>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <h3 className="text-xl font-semibold mt-4 text-gray-800">Ingredients</h3>
                        <p className="text-gray-700">{ingredients}</p>
                    </div>

                    {/* Instructions */}
                    <div>
                        <h3 className="text-xl font-semibold mt-4 text-gray-800">Instructions</h3>
                        <p className="text-gray-700 whitespace-pre-line">{instructions}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default RecipeDetails;
