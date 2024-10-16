import React from "react";


interface ConfirmModalProps {
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
}


export const ConfirmModal: React.FC<ConfirmModalProps> = ({onClose, onConfirm, title, message }) => {
    return (
        <div className="fixed z-20 top-0 left-0 w-full h-full bg-black/25 backdrop-blur-sm grid place-items-center">
            <div className="modal bg-white p-5 grid gap-3">
                <h2 className="font-bold text-2xl">{title}</h2>
                <p>{message}</p>
                <div className="modal__buttons flex justify-between items-center p-2">
                    <button className="bg-gray-300 py-1 px-3 cursor-pointer hover:bg-gray-200 font-bold" onClick={onClose}>Cancel</button>
                    <button className="bg-red-500 py-1 px-3 cursor-pointer hover:bg-red-400 font-bold text-white" onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};
