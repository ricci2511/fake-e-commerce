import { motion } from 'framer-motion';
import React, { useState } from 'react';

const categoryClasses = 'p-4 hover:text-brightRed';
const selectedCategoryClasses = 'relative p-4 text-brightRed';

const ShopCategories = () => {
    const categories = [
        { label: 'Men clothing' },
        { label: 'Women clothing' },
        { label: 'Electronics' },
        { label: 'Jewelery' },
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <nav className="flex w-full items-center justify-between border-b border-gray-300 text-center text-sm font-medium">
            {categories.map((category) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                    key={category.label}
                    className={
                        JSON.stringify(category) ===
                        JSON.stringify(selectedCategory)
                            ? selectedCategoryClasses
                            : categoryClasses
                    }
                    onClick={() => setSelectedCategory({ ...category })}
                >
                    {category.label}
                    {JSON.stringify(category) ===
                    JSON.stringify(selectedCategory) ? (
                        <motion.div
                            className="absolute -bottom-px left-0 right-0 h-px bg-brightRed"
                            layoutId="underline"
                        />
                    ) : null}
                </a>
            ))}
        </nav>
    );
};

export default ShopCategories;
