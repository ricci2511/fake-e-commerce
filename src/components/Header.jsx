import React, { useState } from 'react';
import logo from 'assets/logo.svg';
import ShoppingCartButton from 'components/UI/Buttons/ShoppingCartButton';
import HamburgerMenu from 'components/Navigation/HamburgerMenu';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import AccountButton from 'components/UI/Buttons/AccountButton';

const Header = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const handleOnHamburgerOpen = () =>
        setIsHamburgerOpen((prevState) => !prevState);

    return (
        <header className="sticky top-0 z-10 bg-lightPink shadow-lg">
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
                <div className="flex items-center space-x-6">
                    <AccountButton />
                    <ShoppingCartButton />
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
