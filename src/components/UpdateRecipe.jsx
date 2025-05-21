import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateRecipe = () => {
    const recipe = useLoaderData();
    const navigate = useNavigate();
    const [updated, setUpdated] = useState(false);

    const handleUpdateRecipe = async (e) => {
        e.preventDefault();

        const form = e.target;
        const updatedRecipe = {
            image: form.image.value,
            title: form.title.value,
            ingredients: form.ingredients.value,
            instructions: form.instructions.value,
            cuisine: form.cuisine.value,
            prepTime: form.prepTime.value,
            categories: Array.from(form.querySelectorAll('input[name="categories"]:checked')).map(input => input.value)
        };

        try {
            const res = await fetch(`http://localhost:3000/recipes/${recipe._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedRecipe)
            });

            const data = await res.json();
            if (data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Updated Successfully!',
                    text: 'Your recipe has been updated.',
                    confirmButtonColor: '#f97316'
                });
                setUpdated(true);
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'No Changes Made',
                    text: 'You didn’t modify anything.',
                    confirmButtonColor: '#f97316'
                });
            }
        } catch (error) {
            console.error("Update error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Something went wrong.',
                confirmButtonColor: '#f97316'
            });
        }
    };

    return (
        <div className="mb-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-2xl mt-10"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 animate-pulse">Update your Recipe</h2>
                <form onSubmit={handleUpdateRecipe} className="space-y-6">
                    <div>
                        <label className="block text-gray-700">Image URL</label>
                        <input type="text" name='image' defaultValue={recipe.image} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400" />
                    </div>

                    <div>
                        <label className="block text-gray-700">Title</label>
                        <input type="text" name='title' defaultValue={recipe.title} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400" />
                    </div>

                    <div>
                        <label className="block text-gray-700">Ingredients</label>
                        <textarea name='ingredients' defaultValue={recipe.ingredients} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700">Instructions</label>
                        <textarea name='instructions' defaultValue={recipe.instructions} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700">Cuisine Type</label>
                        <select name='cuisine' defaultValue={recipe.cuisine} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400">
                            <option>Italian</option>
                            <option>Mexican</option>
                            <option>Indian</option>
                            <option>Chinese</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Preparation Time (in minutes)</label>
                        <input type="number" name='prepTime' defaultValue={recipe.prepTime} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400" />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Categories</label>
                        <div className="flex flex-wrap gap-4">
                            {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map((category) => (
                                <label key={category} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="categories"
                                        value={category}
                                        defaultChecked={Array.isArray(recipe.categories) ? recipe.categories.includes(category) : recipe.categories === category}
                                        className="accent-orange-400"
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
                    >
                        Update Recipe
                    </motion.button>
                </form>

                {updated && (
                    <div className="mt-6 text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/')}
                            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-medium transition"
                        >
                            Go to Home
                        </motion.button>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default UpdateRecipe;
