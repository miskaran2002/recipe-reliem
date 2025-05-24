import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Provider/AuthProvider';

const AddRecipe = () => {
    const { user } = useContext(AuthContext);


    const handleAddRecipe = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries());

        // Get selected checkboxes (categories)
        const categories = Array.from(form.querySelectorAll('input[name="categories"]:checked')).map(input => input.value);
        newRecipe.categories = categories;

        // Add logged in user's email
        newRecipe.ownerEmail = user?.email;
        newRecipe.ownerLike = user?.ownerLike;

        console.log(newRecipe);

        // Send recipe to backend
        fetch('https://recipe-realm-server-gamma.vercel.app/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipe),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Recipe added successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    form.reset();
                }
            })
            .catch((err) => {
                console.error('Error adding recipe:', err);
                Swal.fire("Error", "Failed to add recipe", "error");
            });
    };

    return (
        <div>
            <Navbar />
            <div className='mb-4'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-2xl mt-10"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 animate-pulse">
                        Add a New Recipe
                    </h2>
                    <form onSubmit={handleAddRecipe} className="space-y-6">
                        <div>
                            <label className="block text-gray-700">Image URL</label>
                            <input type="text" name="image" className="w-full p-3 border rounded-xl" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Title</label>
                            <input type="text" name="title" className="w-full p-3 border rounded-xl" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Ingredients</label>
                            <textarea name="ingredients" className="w-full p-3 border rounded-xl"></textarea>
                        </div>
                        <div>
                            <label className="block text-gray-700">Instructions</label>
                            <textarea name="instructions" className="w-full p-3 border rounded-xl"></textarea>
                        </div>
                        <div>
                            <label className="block text-gray-700">Cuisine Type</label>
                            <select name="cuisine" className="w-full p-3 border rounded-xl">
                                <option>Italian</option>
                                <option>Mexican</option>
                                <option>Indian</option>
                                <option>Chinese</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Preparation Time</label>
                            <input type="number" name="prepTime" className="w-full p-3 border rounded-xl" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Categories</label>
                            <div className="flex flex-wrap gap-4">
                                {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map((category) => (
                                    <label key={category} className="flex items-center gap-2">
                                        <input type="checkbox" name="categories" value={category} className="accent-orange-400" />
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
            </div>
            <Footer />
        </div>
    );
};

export default AddRecipe;
