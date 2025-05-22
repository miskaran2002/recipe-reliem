import React from 'react';
import RecipeCard from './RecipeCard';
import { useLoaderData } from 'react-router';
import { div } from 'framer-motion/client';
import Footer from './Footer';
import Navbar from './Navbar';

const AllRecipes = () => {
    const recipes = useLoaderData();
    console.log('recipes:', recipes);

    if (!recipes || !Array.isArray(recipes)) {
        return <div className="text-center text-red-600 font-semibold mt-10">No recipes found or error loading data.</div>;
    }

    return (


      <div>
        <div>
            <Navbar></Navbar>
        </div>

            <div className="text-center mb-8 mt-4">
                <h2 className="text-4xl font-bold text-orange-600 mb-2">All Delicious Recipes 🍽️</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover a variety of handpicked recipes from all over the world. Whether you're looking for a quick snack or a gourmet dinner, we've got something tasty waiting for you!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4">
                {recipes.map(recipe => (
                    <RecipeCard recipe={recipe} key={recipe._id} />
                ))}
            </div>

            <div>
                <Footer></Footer>
            </div>
      </div>

    );
};

export default AllRecipes;
