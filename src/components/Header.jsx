import React, { useContext } from 'react';
import logo from '../assets/logo.svg';
import ShoppingCartButton from './UI/ShoppingCartButton';
import HamburgerMenu from './Navigation/HamburgerMenu';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { openCart } = useContext(ShoppingCartContext);

    return (
        <header className="sticky top-0 z-20 bg-lightPink shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4 lg:flex">
                <Link to="/">
                    <div id="logo" className="flex items-center space-x-4">
                        <img src={logo} alt="logo" className="w-12" />
                        <h1 className="font-bold md:text-xl lg:text-2xl">
                            Fake E-Commerce
                        </h1>
                    </div>
                </Link>
                <h2 className="hidden text-2xl font-light lg:block">
                    Everything you could ever want
                </h2>
                {/* PLACEHOLDER FOR HAMBURGUER MENU */}
                <div className="relative flex items-center space-x-16">
                    <div onClick={openCart}>
                        <ShoppingCartButton />
                    </div>
                    <div className="space-y-6 lg:hidden lg:space-y-0">
                        <HamburgerMenu />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
