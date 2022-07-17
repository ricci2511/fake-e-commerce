import React from 'react';
import { motion } from 'framer-motion';

const AnimatedMain = ({ children }) => {
    return (
        <main className="flex min-h-[36rem] w-full flex-col space-y-12 rounded-xl bg-paleWhite py-12 px-10 shadow-lg">
            <motion.div
                className="py12 px10 flex flex-col space-y-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {children}
            </motion.div>
        </main>
    );
};

export default AnimatedMain;
