import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const FadeInBackdrop = ({ isOpen, closeFocusedElement }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed top-0 left-0 z-20 h-full w-full bg-black"
                    onClick={closeFocusedElement}
                ></motion.div>
            )}
        </AnimatePresence>
    );
};

export default FadeInBackdrop;
