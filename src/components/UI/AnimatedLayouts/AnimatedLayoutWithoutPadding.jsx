import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLayoutWithoutPadding = ({ children }) => {
    return (
        <main className="flex min-h-[36rem] w-full flex-col space-y-12 rounded-xl bg-paleWhite shadow-lg">
            <motion.div
                className="flex h-full flex-col space-y-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {children}
            </motion.div>
        </main>
    );
};

export default AnimatedLayoutWithoutPadding;
