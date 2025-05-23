import React, { useEffect, useState } from 'react';
// import RecipeCard if not already imported
import RecipeCard from '../components/RecipeCard'; // adjust path if needed

const TopRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Fetch top-liked recipes on component mount
        fetch('http://localhost:3000/recipes/top-liked')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching top recipes:', error));
    }, []);

    return (
        <div className="px-4 mt-4 mb-4">
            <h2 className="text-2xl font-bold text-center mb-6">🔥 Top Liked Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default TopRecipes;
