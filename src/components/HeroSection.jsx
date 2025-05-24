import React from "react";
import Lottie from "lottie-react";
import cookingAnimation from "../assets/animations/cooking.json";

const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 bg-gradient-to-r from-orange-100 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600 dark:text-orange-300">
                    Discover & Share Your Favorite Recipes
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Explore thousands of delicious recipes and share your own kitchen creations with the world!
                </p>
                <a
                    href="/explore"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition"
                >
                    Explore Recipes
                </a>
            </div>

            <div className="md:w-1/2 mb-8 md:mb-0">
                <Lottie animationData={cookingAnimation} loop={true} />
            </div>
        </div>
    );
};

export default HeroSection;
