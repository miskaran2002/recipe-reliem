import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';

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

    

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/recipes/${_id}`,{
                    method: 'DELETE',
                    
                })
                    .then((res) => {
                        if (res.ok) {
                            Swal.fire(
                                "Deleted!",
                                "Your recipe has been deleted.",
                                "success"
                            );
                            navigate('/allRecipes');
                        } else {
                            Swal.fire(
                                "Error!",
                                "There was an error deleting the recipe.",
                                "error"
                            );
                        }
                })
                    .then((res) => res.json())
                    .then((data) => {   
                        if(data.deletedCount){
                             Swal.fire({
                               title: "Deleted!",
                                text: "Your recipe has been deleted.",
                                icon: "success"
                            });
                        }

                    }) 


               
            }
          });
        
    };

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="max-w-5xl mx-auto px-4 py-10">
                <p className="text-center text-xl font-medium text-orange-600 mb-8">
                    🍽️ Dive into the full details of this delightful recipe — from rich ingredients to step-by-step instructions. Let's get cooking!
                </p>

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

                                <Link to={`/updateRecipe/${_id}`}>
                                 <button
                                    
                                    className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition"
                                >
                                    <FiEdit /> Update
                                </button>
                                </Link>
                               
                                <button
                                    onClick={()=>handleDelete(_id)}
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
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default RecipeDetails;
