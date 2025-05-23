import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const themes = ['light', 'dark', 'blue', 'green'];

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleToggle = () => {
        // থিমের লিস্ট থেকে পরের থিম সিলেক্ট করব
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        toggleTheme(themes[nextIndex]);
    };

    return (
        <button
            onClick={handleToggle}
            className="border px-4 py-2 rounded"
        >
            Theme: {theme}
        </button>
    );
};

export default ThemeToggle;
