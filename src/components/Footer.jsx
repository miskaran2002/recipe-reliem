import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'; // use FaXTwitter for new "X" icon

const Footer = () => {
    return (
        <footer className="bg-orange-500 text-white py-8 mt-4">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Logo and Name */}
                <div className="flex items-center gap-3">
                    <span className="text-3xl">🍽️</span>
                    <span className="text-xl font-semibold tracking-wide">RecipeRealm</span>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-wrap justify-center gap-6 font-medium">
                    <li><Link to="/" className="hover:text-orange-100">Home</Link></li>
                    <li><Link to="/addRecipe" className="hover:text-orange-100">Add Recipe</Link></li>
                    <li><Link to="/updateRecipe" className="hover:text-orange-100">Update Recipe</Link></li>
                </ul>

                {/* Social Icons */}
                <div className="flex gap-6 text-white">
                    <a
                        href="https://www.facebook.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-orange-100 transition-colors text-xl"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-orange-100 transition-colors text-xl"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://x.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                        className="hover:text-orange-100 transition-colors text-xl"
                    >
                        <FaXTwitter />
                    </a>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center text-sm mt-6 text-orange-100">
                &copy; {new Date().getFullYear()} MyRecipes. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
