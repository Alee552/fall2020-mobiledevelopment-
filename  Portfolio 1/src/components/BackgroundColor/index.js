import React from 'react';

function BackgroundColor() {
    const isBackgroundRed =true;

    return (
        <div 
        style={{ 
            backgroundcolor: isBackgroundRed ? 'red' : 'blue,'
        }} 
        />
    );
}

export default BackgroundColor;