import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const DarkOverlay = ({ isOpen, closeFocusedElement }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 0.65 }}
                    className="fixed top-0 z-20 h-full w-full bg-black opacity-70"
                    onClick={closeFocusedElement}
                ></motion.div>
            )}
        </AnimatePresence>
    );
};

export default DarkOverlay;
