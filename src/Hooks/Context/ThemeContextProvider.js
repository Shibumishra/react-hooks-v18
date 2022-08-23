import React, { useContext, useState } from 'react';

// Create Context Hook
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// Custom Hooks
export function useTheme() {
    return useContext(ThemeContext);
};

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
};


const ThemeContextProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    };

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;