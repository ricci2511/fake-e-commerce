import React from 'react';
import { MdClose } from 'react-icons/md';

const FloatingErrorAlert = ({ error, closeError }) => {
    return (
        <aside
            className={`${
                error ? 'right-4' : 'right-[-110%]'
            } fixed bottom-4 z-50 flex items-center justify-center rounded-lg bg-red-500 px-5 py-3 text-white transition-all duration-700 ease-in-out`}
        >
            <p className="text-sm font-medium">Oops! {error}</p>
            <button
                className="ml-3 rounded bg-white/20 p-1 hover:bg-white/30"
                aria-label="Close Popup"
                onClick={closeError}
            >
                <MdClose />
            </button>
        </aside>
    );
};

export default FloatingErrorAlert;
