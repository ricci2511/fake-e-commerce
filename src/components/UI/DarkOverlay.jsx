import React from 'react';
import { motion } from 'framer-motion';

const DarkOverlay = ({ closeFocusedElement }) => {
    return (
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.65 }}
            className="fixed top-0 z-20 h-full w-full bg-black opacity-50"
            onClick={closeFocusedElement}
        ></motion.div>
    );
};

export default DarkOverlay;
