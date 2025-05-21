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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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
