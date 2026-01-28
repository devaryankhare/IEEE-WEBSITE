import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Check local storage or system memory, default to dark for this app as per original design
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'light') {
            setIsDarkMode(false);
        } else {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        if (isDarkMode) {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
