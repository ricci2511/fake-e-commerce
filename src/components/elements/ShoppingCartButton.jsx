import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ShoppingCartButton = () => {
    return (
        <button className="relative cursor-pointer rounded-full bg-white p-4">
            <FaShoppingCart size={25} />
            <div className="absolute bottom-0 right-0 flex h-6 w-6 translate-y-2 items-center justify-center rounded-full bg-red-500 text-white">
                3
            </div>
        </button>
    );
};

export default ShoppingCartButton;
