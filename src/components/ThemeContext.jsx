// src/context/ThemeContext.jsx
import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const availableThemes = ['light', 'dark', 'blue', 'green'];

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved && availableThemes.includes(saved)) {
            setTheme(saved);
            document.documentElement.className = saved;
        }
    }, []);

    const changeTheme = (newTheme) => {
        if (availableThemes.includes(newTheme)) {
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            document.documentElement.className = newTheme;
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
