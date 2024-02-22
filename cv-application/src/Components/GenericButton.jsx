import React from 'react';
import '../../Styles/GenericButton.css';

const Button = ({ text, onClick }) => {
    return (
        <button className="genericButton" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;