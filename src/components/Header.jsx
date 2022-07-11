import React from 'react';
import logo from '../assets/logo.svg';
import ShoppingCartButton from './elements/ShoppingCartButton';
import HamburgerMenu from './elements/HamburgerMenu';

const Header = () => {
    return (
        <header className="sticky top-0 bg-lightPink shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4 lg:flex">
                <div id="logo" className="flex items-center space-x-4">
                    <img src={logo} alt="logo" className="w-12" />
                    <h1 className="font-bold md:text-xl lg:text-2xl">
                        Fake E-Commerce
                    </h1>
                </div>
                <h2 className="hidden text-2xl font-light lg:block">
                    Everything you could ever want
                </h2>
                {/* PLACEHOLDER FOR HAMBURGUER MENU */}
                <div className="relative flex items-center space-x-16">
                    <ShoppingCartButton />
                    <div className="space-y-6 lg:hidden lg:space-y-0">
                        <HamburgerMenu />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
