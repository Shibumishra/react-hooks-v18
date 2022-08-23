import React from 'react';
import FuncationContext from './FuncationContext';
import  ThemeContextProvider  from './ThemeContextProvider';

const Context = () => {

    return (
        <ThemeContextProvider>
            <FuncationContext />
        </ThemeContextProvider>
    )
}

export default Context;