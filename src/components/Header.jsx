import React, { useContext, useState } from 'react';
import logo from 'assets/logo.svg';
import ShoppingCartButton from 'components/UI/ShoppingCartButton';
import HamburgerMenu from 'components/Navigation/HamburgerMenu';
import { ShoppingCartContext } from 'context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';

const Header = () => {
    const { openCart } = useContext(ShoppingCartContext);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const handleOnHamburgerOpen = () =>
        setIsHamburgerOpen((prevState) => !prevState);

    return (
        <header className="sticky top-0 z-10 bg-lightPink shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4 lg:flex">
                <Link to="/fake-e-commerce">
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
                <div className="relative flex items-center space-x-6">
                    <div onClick={openCart}>
                        <ShoppingCartButton />
                    </div>
                    <div className="z-40 space-y-6 lg:hidden lg:space-y-0">
                        <Hamburger
                            toggled={isHamburgerOpen}
                            toggle={handleOnHamburgerOpen}
                        />
                    </div>
                </div>
            </div>
            <HamburgerMenu
                isOpen={isHamburgerOpen}
                changeIsOpen={handleOnHamburgerOpen}
            />
        </header>
    );
};

export default Header;
