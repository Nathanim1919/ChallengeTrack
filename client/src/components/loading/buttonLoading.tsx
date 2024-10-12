import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ButtonLoading: React.FC = () => {
    return (
        <div className="relative gr animate-spin w-6 h-6 rounded-ful button-loading">
            <AiOutlineLoading3Quarters className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 w-6 h-6" />
        </div>
    );
};

export default ButtonLoading;