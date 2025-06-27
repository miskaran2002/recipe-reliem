import React, { useContext, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';
import { FaAffiliatetheme, FaSignInAlt } from 'react-icons/fa';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { AuthContext } from '../Provider/AuthProvider';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const { toggleTheme, theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => navigate('/'))
            .catch((err) => console.error(err));
    };

    const bgColorClass = {
        light: 'bg-white text-black',
        dark: 'bg-gray-900 text-white',
        blue: 'bg-blue-800 text-white',
        green: 'bg-green-800 text-white',
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'AboutUs', path: '/aboutUs' },
        { name: 'Add Recipe', path: '/addRecipe' },
        { name: 'All Recipes', path: '/allRecipes' },
        { name: 'My Recipes', path: '/myRecipes' },
       
        !user && {
            name: (
                <div className="flex items-center gap-1">
                    <FaSignInAlt className="text-lg" /> <span>Login</span>
                </div>
            ),
            path: '/login',
        },
        !user && { name: 'Register', path: '/register' },
        user && {
            name: (
                <button onClick={handleLogout} className="flex items-center gap-1">
                    <RiLogoutCircleLine className="text-lg" /> Logout
                </button>
            ),
            path: '#',
        },
    ].filter(Boolean);

    return (
        <nav className={`${bgColorClass[theme] || 'bg-white text-black'} shadow-md`}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-wide">
                    🍽️ RecipeRealm
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-6 font-medium">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'underline underline-offset-4 font-semibold'
                                        : 'hover:text-orange-600 transition'
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}

                    {/* Theme Toggle Button */}
                    <li>
                        <button
                            onClick={() => {
                                const themes = ['light', 'dark', 'blue', 'green'];
                                const currentIndex = themes.indexOf(theme);
                                const nextIndex = (currentIndex + 1) % themes.length;
                                toggleTheme(themes[nextIndex]);
                            }}
                            className="bg-white text-orange-600 px-2 py-1 rounded text-sm font-semibold hover:bg-orange-100 transition"
                            title="Toggle Theme"
                        >
                            <FaAffiliatetheme />
                        </button>
                    </li>

                    {user && (
                        <li className="flex items-center gap-2">
                            <img
                                src={user.photoURL || 'https://i.ibb.co/2t4D2YH/avatar.png'}
                                alt="Avatar"
                                className="w-9 h-9 rounded-full border-2 border-white"
                                title={user.displayName}
                            />
                        </li>
                    )}
                </ul>

                {/* Mobile Toggle Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <ul className="md:hidden px-4 pb-4 space-y-2 animate-slide-down origin-top bg-orange-400">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                className="block py-2 px-3 rounded hover:bg-orange-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}

                    {/* Theme Toggle Button for Mobile */}
                    <li className="px-3">
                        <button
                            onClick={() => {
                                const themes = ['light', 'dark', 'blue', 'green'];
                                const currentIndex = themes.indexOf(theme);
                                const nextIndex = (currentIndex + 1) % themes.length;
                                toggleTheme(themes[nextIndex]);
                            }}
                            className="w-full text-left py-2 px-3 rounded bg-white text-orange-600 font-semibold hover:bg-orange-100 transition"
                            title="Toggle Theme"
                        >
                            <FaAffiliatetheme />
                        </button>
                    </li>

                    {user && (
                        <li className="flex items-center gap-2 px-3">
                            <img
                                src={user.photoURL || 'https://i.ibb.co/2t4D2YH/avatar.png'}
                                alt="Avatar"
                                className="w-6 h-6 rounded-full border border-white"
                            />
                            <span>{user.displayName || 'My Profile'}</span>
                        </li>
                    )}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
