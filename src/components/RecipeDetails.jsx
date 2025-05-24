import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate, Link } from 'react-router';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Provider/AuthProvider';

const RecipeDetails = () => {
    const recipe = useLoaderData();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const {
        _id,
        image,
        title,
        ingredients,
        instructions,
        cuisine,
        prepTime,
        categories,
        likes = 0,
        email
    } = recipe;

    const [likeCount, setLikeCount] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = async () => {
        if (isLiked) return;

        // Prevent users from liking their own recipe
        if (user?.email === creatorEmail) {
            Swal.fire('Oops!', 'You cannot like your own recipe.', 'info');
            return;
        }

        try {
            const res = await fetch(`https://recipe-realm-server-gamma.vercel.app//${_id}/like`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userEmail: user?.email })
            });

            const data = await res.json();

            if (res.status === 403) {
                Swal.fire('Forbidden', data.message, 'warning');
                return;
            }

            if (data.success) {
                setLikeCount(prev => prev + 1);
                setIsLiked(true);
            } else {
                Swal.fire('Error', data.message || 'Failed to like the recipe.', 'error');
            }
        } catch (err) {
            console.error('Error liking recipe:', err);
            Swal.fire('Error', 'Something went wrong.', 'error');
        }
    };

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://recipe-realm-server-gamma.vercel.app//${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
                            navigate('/allRecipes');
                        }
                    });
            }
        });
    };

    return (
        <div>
            <Navbar />

            <div className="max-w-5xl mx-auto px-4 py-10">
                <p className="text-center text-xl font-medium text-orange-600 mb-2">
                    {likeCount} people interested in this recipe
                </p>
                <p className="text-center text-base text-gray-600 mb-6">
                    🍽️ Dive into the full details of this delightful recipe!
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    <img
                        src={image || 'https://via.placeholder.com/800x400?text=No+Image'}
                        alt={title}
                        className="w-full h-[400px] object-cover"
                    />

                    {/* Like Button */}
                    <div className="p-4 flex justify-between items-center bg-orange-50">
                        <motion.button
                            whileTap={{ scale: 1.2 }}
                            onClick={handleLike}
                            disabled={isLiked}
                            className={`text-white px-4 py-2 rounded-md transition font-medium ${isLiked ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
                                }`}
                        >
                            ❤️ {likeCount} {isLiked ? 'Liked' : 'Like'}
                        </motion.button>
                    </div>

                    {/* Recipe Content */}
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-bold text-orange-600">{title}</h2>
                            <div className="flex gap-3">
                                <Link to={`/updateRecipe/${_id}`}>
                                    <button className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition">
                                        <FiEdit /> Update
                                    </button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                                >
                                    <FiTrash2 /> Delete
                                </button>
                            </div>
                        </div>

                        <div className="text-gray-700 space-y-1">
                            <p><span className="font-semibold">Cuisine:</span> {cuisine}</p>
                            <p><span className="font-semibold">Preparation Time:</span> {prepTime} minutes</p>
                            <p><span className="font-semibold">Category:</span> {categories}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mt-4 text-gray-800">Ingredients</h3>
                            <p className="text-gray-700">{ingredients}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mt-4 text-gray-800">Instructions</h3>
                            <p className="text-gray-700 whitespace-pre-line">{instructions}</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default RecipeDetails;
