'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';
const TextEffect = ({ text1, text2 }) => {
    return (
        <>
            <typewriter-effect
                text={[text1, text2]}
            />
        </>
    );
};

export default TextEffect;