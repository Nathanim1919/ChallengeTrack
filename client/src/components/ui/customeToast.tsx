import React, { useState, useEffect } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

interface CustomeToastProps {
    message: string;
    type: 'success' | 'error';
}

export const CustomeToast: React.FC<CustomeToastProps> = ({ message, type }) => {
    const [show, setShow] = useState(!!message);
    const [animate, setAnimate] = useState(false);

    console.log(message);

    useEffect(() => {
        if (message) {
            setShow(true);
            setTimeout(() => setAnimate(true), 10);
            const timer = setTimeout(() => {
                setAnimate(false);
                setTimeout(() => setShow(false), 100); // Wait for animation to complete
            }, 2000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [message]);

    if (!show) return null;

    return (
        <div className={`absolute transform transition-transform duration-500 ${animate ? "absolute translate-x-0" : "translate-x-full"} absolute z-10 bg-white border border-l-8 shadow-lg ${type === 'error' ? "border-red-600" : "border-green-500"} top-3 right-3 py-1 px-4 flex flex-col`}>
            <IoMdCloseCircle className='absolute top-1 right-1 cursor-pointer hover:text-gray-500' onClick={() => setAnimate(false)} />
            <h3 className={`m-0 font-bold ${type === "error" ? "text-red-500" : "text-green-500"}`}>{type.toUpperCase()}</h3>
            <p className='m-0 text-[13px] text-gray-500'>{message}</p>
        </div>
    );
};