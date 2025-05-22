// components/ThemeSwitcher.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { changeTheme, theme } = useContext(ThemeContext);

    const themes = ['light', 'dark', 'blue', 'green'];

    return (
        <div className="flex gap-2 justify-center my-4">
            {themes.map(t => (
                <button
                    key={t}
                    onClick={() => changeTheme(t)}
                    className={`px-4 py-2 rounded font-medium border ${theme === t ? 'border-black' : 'border-gray-400'} hover:scale-105 transition`}
                >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;
