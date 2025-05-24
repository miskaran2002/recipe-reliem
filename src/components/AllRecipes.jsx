import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import Navbar from './Navbar';
import Footer from './Footer';

const AllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedCuisine, setSelectedCuisine] = useState('All');

    useEffect(() => {
        fetch('https://recipe-realm-server-gamma.vercel.app/')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch recipes');
                return res.json();
            })
            .then((data) => {
                setRecipes(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const filteredRecipes = selectedCuisine === 'All'
        ? recipes
        : recipes.filter((recipe) => recipe.cuisine === selectedCuisine);

    const cuisines = ['All', 'Italian', 'Mexican', 'Indian', 'Chinese', 'Others'];

    if (loading) {
        return <div className="text-center mt-10 text-orange-600 font-semibold animate-pulse">Loading recipes...</div>;
    }

    if (error) {
        return <div className="text-center mt-10 text-red-600 font-semibold">Error: {error}</div>;
    }

    return (
        <div>
            <Navbar />

            <div className="text-center mb-8 mt-4">
                <h2 className="text-4xl font-bold text-orange-600 mb-2">All Delicious Recipes 🍽️</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover recipes from all over the world. Pick your favorite and get cooking!
                </p>
            </div>

            <div className="flex justify-center mb-6">
                <select
                    value={selectedCuisine}
                    onChange={(e) => setSelectedCuisine(e.target.value)}
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                    {cuisines.map((cuisine) => (
                        <option key={cuisine} value={cuisine}>{cuisine}</option>
                    ))}
                </select>
            </div>

            {filteredRecipes.length === 0 ? (
                <p className="text-center text-gray-500">No recipes found for this cuisine.</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-4 max-w-6xl mx-auto px-4">
                        {filteredRecipes.slice(0, visibleCount).map((recipe) => (
                            <RecipeCard recipe={recipe} key={recipe._id} />
                        ))}
                    </div>

                    {visibleCount < filteredRecipes.length && (
                        <div className="text-center my-6">
                            <button
                                onClick={handleLoadMore}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </>
            )}

            <Footer />
        </div>
    );
};

export default AllRecipes;
