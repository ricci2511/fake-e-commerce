import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { FaShoppingBag } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { BsChatSquareFill } from 'react-icons/bs';

const linkClasses = 'w-52 min-w-full py-3 px-2';
const selectedLinkClasses =
    'w-52 min-w-full rounded-l-2xl bg-paleWhite py-3 px-2';
const linkWrapperClasses = 'flex items-center space-x-3';

const Sidebar = () => {
    return (
        <nav className="mt-12 hidden lg:block">
            <div className="sticky top-40 flex-col space-y-12 lg:flex">
                <Link to="/" className={selectedLinkClasses}>
                    <div className={linkWrapperClasses}>
                        <HiHome size={20} />
                        <span>Home</span>
                    </div>
                </Link>
                <Link to="/shop" className={linkClasses}>
                    <div className={linkWrapperClasses}>
                        <FaShoppingBag size={20} />
                        <span>Shop</span>
                    </div>
                </Link>
                <Link to="/about" className={linkClasses}>
                    <div className={linkWrapperClasses}>
                        <FaInfoCircle size={20} />
                        <span>About</span>
                    </div>
                </Link>
                <Link to="/contact" className={linkClasses}>
                    <div className={linkWrapperClasses}>
                        <BsChatSquareFill size={20} />
                        <span>Contact</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Sidebar;
