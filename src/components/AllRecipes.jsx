import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import RecipeCard from './RecipeCard';
import Navbar from './Navbar';
import Footer from './Footer';

const MyRecipes = () => {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/recipes?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setRecipes(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [user]);

    if (loading) {
        return <div className="text-center mt-10 text-blue-500 font-semibold">Loading your recipes...</div>;
    }

    if (!recipes.length) {
        return <div className="text-center mt-10 text-red-600 font-semibold">No recipes found for your account.</div>;
    }

    return (
        <div>
            <Navbar />

            <div className="text-center mb-8 mt-4">
                <h2 className="text-4xl font-bold text-green-600 mb-2">My Recipes 🧑‍🍳</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Here are all the recipes you've shared with the world. Keep cooking and keep creating!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4 px-4">
                {recipes.map(recipe => (
                    <RecipeCard recipe={recipe} key={recipe._id} />
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default MyRecipes;
