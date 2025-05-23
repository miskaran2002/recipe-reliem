// src/contexts/ThemeContext.jsx
import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const availableThemes = ['light', 'dark', 'blue', 'green'];

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // পুরনো class remove করে নতুন theme class add করব
        document.body.className = '';
        document.body.classList.add(theme);
    }, [theme]);

    const toggleTheme = (selectedTheme) => {
        if (availableThemes.includes(selectedTheme)) {
            setTheme(selectedTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
