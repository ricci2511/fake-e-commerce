import React from 'react';

const selectedCategoryClasses =
    'border-t border-l border-r border-gray-200 bg-white';

const ShopCategories = () => {
    return (
        <nav className="flex w-full items-center justify-around border-b border-gray-100 text-center text-sm font-medium">
            <a
                href=""
                className="-mb-px border-b border-current p-4 text-brightRed"
            >
                Men clothing
            </a>

            <a
                href=""
                className="-mb-px border-b border-transparent p-4 hover:text-brightRed"
            >
                Women clothing
            </a>

            <a
                href=""
                className="-mb-px border-b border-transparent p-4 hover:text-brightRed"
            >
                Electronics
            </a>

            <a
                href=""
                className="-mb-px border-b border-transparent p-4 hover:text-brightRed"
            >
                Jewelery
            </a>
        </nav>
    );
};

export default ShopCategories;
