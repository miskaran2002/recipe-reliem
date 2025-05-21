import React, { useState } from 'react';
import { NavLink, Link } from 'react-router';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Add Recipe', path: '/addRecipe' },
        { name: 'Update Recipe', path: '/updateRecipe' },
    ];

    return (
        <nav className="bg-orange-500 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-wide">
                    🍽️ RecipeRealm
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-6 font-medium">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'underline underline-offset-4 text-white'
                                        : 'hover:text-orange-100 transition'
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <ul className="md:hidden px-4 pb-4 space-y-2 animate-slide-down origin-top bg-orange-400">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className="block py-2 px-3 rounded hover:bg-orange-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
