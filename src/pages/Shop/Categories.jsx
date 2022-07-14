import { motion } from 'framer-motion';
import React, { useState } from 'react';

const categoryClasses = 'p-4 hover:text-brightRed';
const selectedCategoryClasses = 'relative p-4 text-brightRed';

const Categories = ({ changeCategory }) => {
    const categories = [
        { label: 'All', category: '' },
        { label: `Men's clothing`, category: `men's clothing` },
        { label: `Women's clothing`, category: `women's clothing` },
        { label: 'Electronics', category: 'electronics' },
        { label: 'Jewelery', category: 'jewelery' },
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <nav className="flex w-full items-end justify-between border-b border-gray-300 text-center text-sm font-medium">
            {categories.map((category) => (
                <button
                    key={category.label}
                    className={
                        category.label === selectedCategory.label
                            ? selectedCategoryClasses
                            : categoryClasses
                    }
                    onClick={() => {
                        setSelectedCategory({ ...category });
                        changeCategory(category.category);
                    }}
                >
                    {category.label}
                    {category.label === selectedCategory.label ? (
                        <motion.div
                            className="absolute -bottom-px left-0 right-0 h-px bg-brightRed"
                            layoutId="underline"
                        />
                    ) : null}
                </button>
            ))}
        </nav>
    );
};

export default Categories;
