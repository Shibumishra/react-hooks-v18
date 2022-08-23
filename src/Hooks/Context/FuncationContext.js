import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeContextProvider';

const FuncationContext = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyle = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        maegin: '2rem'
    }

    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <br />
            <br />
            <div style={themeStyle}>Funcation Theme</div>
        </div>
    )
}

export default FuncationContext;