import React from 'react';
import { MdClose } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

const FloatingErrorAlert = ({ error, closeError }) => {
    return (
        <AnimatePresence>
            {error && (
                <motion.aside
                    initial={{ right: -500 }}
                    animate={{ right: 10 }}
                    exit={{ right: -500 }}
                    transition={{ type: 'spring', stiffness: 120, mass: 0.5 }}
                    className={`fixed bottom-4 z-50 flex items-center justify-center rounded-lg bg-red-500 px-5 py-3 text-white`}
                >
                    <p className="text-sm font-medium">Oops! {error}</p>
                    <button
                        className="ml-3 rounded bg-white/20 p-1 hover:bg-white/30"
                        aria-label="Close Popup"
                        onClick={closeError}
                    >
                        <MdClose />
                    </button>
                </motion.aside>
            )}
        </AnimatePresence>
    );
};

export default FloatingErrorAlert;
