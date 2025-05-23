import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import RecipeCard from './RecipeCard';
import Navbar from './Navbar';
import Footer from './Footer';

const MyRecipes = () => {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/recipes?email=${user.email}`)
                .then(res => res.json())
                .then(data => setRecipes(data));
        }
    }, [user?.email]);

    return (
        <div>
            <Navbar />
            <div className="text-center mb-8 mt-4">
                <h2 className="text-4xl font-bold text-orange-600 mb-2">My Recipes 🍳</h2>
            </div>

            {recipes.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center px-4 py-10">
                    <p className="text-xl md:text-2xl font-semibold text-orange-500 mb-3">Oops! You haven't added any recipes yet.</p>
                    <p className="text-gray-600 text-md">
                        Let your creativity shine in the kitchen! 🥕🍝 <br />
                        Add your favorite dishes and keep your recipe box full!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4 px-4">
                    {recipes.map(recipe => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))}
                </div>
            )}

            <Footer />
        </div>
    );
};

export default MyRecipes;
