import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { FaShoppingBag } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { BsChatSquareFill } from 'react-icons/bs';

const linkClasses = 'w-52 min-w-full py-3 px-2';
const selectedLinkClasses =
    'w-52 min-w-full rounded-l-2xl bg-paleWhite py-3 px-2';
const linkWrapperClasses = 'flex items-center space-x-3';

const Sidebar = () => {
    const location = useLocation();
    console.log(location);

    return (
        <nav className="mt-12 hidden lg:block">
            <div className="sticky top-40 flex-col space-y-12 lg:flex">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? selectedLinkClasses : linkClasses
                    }
                >
                    <div className={linkWrapperClasses}>
                        <HiHome size={20} />
                        <span>Home</span>
                    </div>
                </NavLink>
                <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        isActive ? selectedLinkClasses : linkClasses
                    }
                >
                    <div className={linkWrapperClasses}>
                        <FaShoppingBag size={20} />
                        <span>Shop</span>
                    </div>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? selectedLinkClasses : linkClasses
                    }
                >
                    <div className={linkWrapperClasses}>
                        <FaInfoCircle size={20} />
                        <span>About</span>
                    </div>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? selectedLinkClasses : linkClasses
                    }
                >
                    <div className={linkWrapperClasses}>
                        <BsChatSquareFill size={20} />
                        <span>Contact</span>
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};

export default Sidebar;
