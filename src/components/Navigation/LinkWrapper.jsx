import React from 'react';
import { HiHome } from 'react-icons/hi';
import { FaShoppingBag } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { BsChatSquareFill } from 'react-icons/bs';

const LinkWrapper = ({ linkName }) => {
    const getIcon = (linkName) => {
        switch (linkName) {
            case 'Shop':
                return <FaShoppingBag size={20} />;
            case 'About':
                return <FaInfoCircle size={20} />;
            case 'Contact':
                return <BsChatSquareFill size={20} />;
            default:
                return <HiHome size={20} />;
        }
    };

    return (
        <div className="flex items-center space-x-3">
            {getIcon(linkName)}
            <span>{linkName}</span>
        </div>
    );
};

export default LinkWrapper;
