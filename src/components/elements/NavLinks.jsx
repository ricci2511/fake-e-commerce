import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { FaShoppingBag } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { BsChatSquareFill } from 'react-icons/bs';

const selectedLinkClasses = '';
const linkWrapperClasses = 'flex items-center space-x-3';

const NavLinks = ({ changeIsOpen }) => {
    const linkClasses = ``;

    return (
        <>
            <Link to="/" className={linkClasses} onClick={changeIsOpen}>
                <div className={linkWrapperClasses}>
                    <HiHome size={20} />
                    <span>Home</span>
                </div>
            </Link>
            <Link to="/shop" className={linkClasses} onClick={changeIsOpen}>
                <div className={linkWrapperClasses}>
                    <FaShoppingBag size={20} />
                    <span>Shop</span>
                </div>
            </Link>
            <Link to="/about" className={linkClasses} onClick={changeIsOpen}>
                <div className={linkWrapperClasses}>
                    <FaInfoCircle size={20} />
                    <span>About</span>
                </div>
            </Link>
            <Link to="/contact" className={linkClasses} onClick={changeIsOpen}>
                <div className={linkWrapperClasses}>
                    <BsChatSquareFill size={20} />
                    <span>Contact</span>
                </div>
            </Link>
        </>
    );
};

export default NavLinks;
