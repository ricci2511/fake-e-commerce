import React from 'react';
import { motion } from 'framer-motion';

const AnimatedMain = ({ children }) => {
    return (
        <motion.main
            className="flex min-h-[36rem] w-full flex-col space-y-12 rounded-xl bg-paleWhite py-12 px-10 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.main>
    );
};

export default AnimatedMain;
