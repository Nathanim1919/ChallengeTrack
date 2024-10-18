import React from 'react';

// Define the ButtonProps interface
interface ButtonProps {
    text: string;
    loading?: boolean;
    // icon?: React.ReactNode;

}

// Define the Button component
const Button: React.FC<ButtonProps> = ({ text, loading, }) => {
    return (
        <button
        
        >
            {/* {icon && <span>{icon}</span>} */}
            {loading ? <span>Loading...</span> : text}
        </button>
    );
};

export default Button;