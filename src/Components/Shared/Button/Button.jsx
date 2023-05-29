/* eslint-disable react/prop-types */
import React from 'react';

export const PrimaryButton = ({ title, onClick, classname }) => {
    return (
        <button onClick={onClick} className={`bg-primary text-white font-normal lg:text-lg ${classname}`}>
            {title}
        </button>
    );
};
export const SecondaryButton = ({ title, onClick, classname }) => {
    return (
        <button onClick={onClick} className={`hover:bg-primary duration-500 text-primary hover:text-white font-normal lg:text-lg ${classname}`}>
            {title}
        </button>
    );
};
