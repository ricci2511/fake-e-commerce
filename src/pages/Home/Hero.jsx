import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <article className="max-w-[18rem] space-y-4 md:max-w-lg md:space-y-8">
            <div className="flex items-center justify-between gap-4 text-4xl font-bold md:text-6xl">
                <h2>SHOP</h2>
                <h2>WITH</h2>
                <h2>US</h2>
            </div>
            <div className="flex items-center justify-between gap-3 text-4xl font-bold md:text-6xl">
                <h2 className="pr-2">GET</h2>
                <Link
                    to="/fake-e-commerce/shop"
                    className="flex flex-1 items-center"
                >
                    <motion.button
                        className="w-full rounded-xl bg-purple py-4 px-6 text-center text-sm font-medium text-white md:text-lg"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.94 }}
                        transition={{ duration: 0.3 }}
                    >
                        Shop Now
                    </motion.button>
                </Link>
            </div>
            <div className="flex justify-between gap-4 text-4xl font-bold md:text-6xl">
                <h2>LATEST</h2>
                <h2>DEALS</h2>
            </div>
        </article>
    );
};

export default Hero;
