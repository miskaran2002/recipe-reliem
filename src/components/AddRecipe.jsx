import React from 'react';
import { motion } from 'framer-motion';

const AddRecipe = () => {

    const handleAddRecipe=e=>{
        e.preventDefault();
        const form = e.target;
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-2xl mt-10"
        >
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 animate-pulse">Add a New Recipe</h2>
            <form onSubmit={handleAddRecipe} className="space-y-6">
                <div>
                    <label className="block text-gray-700">Image URL</label>
                    <input type="text" placeholder="Enter image URL" className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400" />
                </div>

                <div>
                    <label className="block text-gray-700">Title</label>
                    <input type="text" placeholder="Recipe title" className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400" />
                </div>

                <div>
                    <label className="block text-gray-700">Ingredients</label>
                    <textarea placeholder="List ingredients..." className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
                </div>

                <div>
                    <label className="block text-gray-700">Instructions</label>
                    <textarea placeholder="Write instructions..." className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
                </div>

                <div>
                    <label className="block text-gray-700">Cuisine Type</label>
                    <select className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400">
                        <option>Italian</option>
                        <option>Mexican</option>
                        <option>Indian</option>
                        <option>Chinese</option>
                        <option>Others</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700">Preparation Time (in minutes)</label>
                    <input type="number" placeholder="e.g. 30" className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400" />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Categories</label>
                    <div className="flex flex-wrap gap-4">
                        {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map((category) => (
                            <label key={category} className="flex items-center gap-2">
                                <input type="checkbox" value={category} className="accent-orange-400" />
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
                    Add Recipe
                </motion.button>
            </form>
        </motion.div>
    );
};

export default AddRecipe;
