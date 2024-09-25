import React from "react";

const ButtonLoading: React.FC = () => {
    return (
        <div className="relative animate-spin w-10 h-10 rounded-full bg-white button-loading">
            <div className="loading"></div>
        </div>
    );
};

export default ButtonLoading;